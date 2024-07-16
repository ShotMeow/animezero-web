"use client";
import { type FC, useEffect, useState } from "react";
import { io } from "socket.io-client";

const UsersCount: FC = () => {
  const [activeUsers, setActiveUsers] = useState<number>();
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("WebSocket сервер подключен");
      setIsConnected(true);
      socket.emit("getActiveUsers");
    });

    socket.on("activeUsers", (count: number) => {
      setActiveUsers(count);
    });

    return () => {
      socket.off("connect");
      socket.off("activeUsers");
      socket.disconnect();
    };
  }, []);

  return (
    isConnected && (
      <div className="flex animate-show items-center gap-4">
        <div className="relative flex size-2 items-center justify-center">
          <span className="absolute size-full rounded-full bg-purple" />
          <span className="absolute -z-10 size-full animate-ping rounded-full bg-purple" />
        </div>
        <p className="flex gap-2">
          <span className="flex h-6 w-5 items-center justify-center font-black">
            {activeUsers}
          </span>
          смотрят
        </p>
      </div>
    )
  );
};

export default UsersCount;

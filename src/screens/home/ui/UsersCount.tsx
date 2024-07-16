"use client";
import { type FC, useEffect, useState } from "react";
import { io } from "socket.io-client";

const UsersCount: FC = () => {
  const [activeUsers, setActiveUsers] = useState<number>();

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("WebSocket сервер подключен");
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
    <p className="flex gap-2">
      <span className="flex h-6 w-5 items-center justify-center font-black">
        {activeUsers}
      </span>
      смотрят
    </p>
  );
};

export default UsersCount;

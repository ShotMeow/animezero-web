"use client";
import { type FC, type PropsWithChildren, useEffect } from "react";
import { io } from "socket.io-client";

import { useZustandStore } from "@/app/store";

const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const setActiveUsers = useZustandStore((state) => state.setActiveUsers);

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
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
  }, [setActiveUsers]);

  return <>{children}</>;
};

export default SocketProvider;

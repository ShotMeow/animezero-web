"use client";
import type { FC } from "react";
import { useZustandStore } from "@/app/store";

const UsersCount: FC = () => {
  const activeUsersCount = useZustandStore((state) => state.activeUsers);

  return (
    activeUsersCount && (
      <div className="flex animate-show items-center gap-4">
        <div className="relative flex size-2 items-center justify-center">
          <span className="absolute size-full rounded-full bg-purple" />
          <span className="absolute -z-10 size-full animate-ping rounded-full bg-purple" />
        </div>
        <p className="flex gap-2">
          <span className="flex h-6 w-5 items-center justify-center font-black">
            {activeUsersCount}
          </span>
          смотрят
        </p>
      </div>
    )
  );
};

export default UsersCount;

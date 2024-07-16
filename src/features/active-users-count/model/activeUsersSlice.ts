import type { StateCreator } from "zustand";

export interface ActiveUsersSlice {
  activeUsers: number | undefined;
  setActiveUsers: (count: number) => void;
}

export const createActiveUsersSlice: StateCreator<ActiveUsersSlice> = (
  set,
) => ({
  activeUsers: undefined,
  setActiveUsers: (count) => set(() => ({ activeUsers: count })),
});

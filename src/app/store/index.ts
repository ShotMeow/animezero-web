import { create } from "zustand";
import {
  type ActiveUsersSlice,
  createActiveUsersSlice,
} from "@/features/active-users-count";

export const useZustandStore = create<ActiveUsersSlice>((...a) => ({
  ...createActiveUsersSlice(...a),
}));

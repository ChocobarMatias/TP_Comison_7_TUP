import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  token: null,
  setSession: (user, token) => set({ user, token }),
  clearSession: () => set({ user: null, token: null }),
}));

export const selectUser = (state) => state.user;
export const selectToken = (state) => state.token;


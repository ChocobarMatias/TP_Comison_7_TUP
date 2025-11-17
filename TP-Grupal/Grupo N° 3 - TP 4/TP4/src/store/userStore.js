import { create } from "zustand";

export const useUserStore = create((set) => ({
  usuario: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });

    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        set({ loading: false, error: data.error });
        return null;
      }

      set({
        usuario: data.usuario, // { nombre, rol }
        loading: false,
        error: null,
      });

      return data;
    } catch (err) {
      set({ loading: false, error: "Error de conexión al servidor" });
      return null;
    }
  },

  logout: () => set({ usuario: null }),
}));

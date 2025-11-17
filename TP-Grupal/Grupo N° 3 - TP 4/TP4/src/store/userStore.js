import { create } from "zustand";

export const useUserStore = create((set) => ({

  usuario: null,
  token: null,
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

      // GUARDAR TOKEN Y USER
      set({
        usuario: data.usuario,
        token: data.token,
        loading: false,
        error: null,
      });

      // 🔍 DEBUG PARA VER QUÉ PASA REALMENTE
      console.log("=========== LOGIN DEBUG ===========");
      console.log("→ Backend devolvió:", data);
      console.log("→ Usuario guardado en el store:", useUserStore.getState().usuario);
      console.log("→ Token guardado en el store:", useUserStore.getState().token);
      console.log("→ Estado completo del store:", useUserStore.getState());
      console.log("====================================");

      return data; // login correcto
    } catch (err) {
      set({ loading: false, error: "Error de conexión al servidor" });
      return null;
    }
  },

  logout: () => set({ usuario: null, token: null }),

}));

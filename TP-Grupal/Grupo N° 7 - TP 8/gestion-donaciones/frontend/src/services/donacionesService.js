import { ENDPOINTS } from "../utils/constants/endpoints";

const API_URL = "http://localhost:3001";

export const donacionesService = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/donaciones`);
    if (!response.ok) {
      throw new Error("Error al obtener donaciones");
    }
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/donaciones/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener donación");
    }
    return response.json();
  },

  create: async (donacion) => {
    const response = await fetch(`${API_URL}/donaciones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donacion),
    });
    if (!response.ok) {
      throw new Error("Error al crear donación");
    }
    return response.json();
  },

  update: async (id, donacion) => {
    const response = await fetch(`${API_URL}/donaciones/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donacion),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar donación");
    }
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/donaciones/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar donación");
    }
    return response.json();
  },
};


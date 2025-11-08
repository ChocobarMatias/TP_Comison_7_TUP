import { ENDPOINTS } from "../utils/constants/endpoints";

const API_URL = "http://localhost:3001";

export const donantesService = {
  getAll: async () => {
    const response = await fetch(`${API_URL}${ENDPOINTS.DONANTES}`);
    if (!response.ok) {
      throw new Error("Error al obtener donantes");
    }
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.DONANTES}/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener donante");
    }
    return response.json();
  },

  create: async (donante) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.DONANTES}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donante),
    });
    if (!response.ok) {
      throw new Error("Error al crear donante");
    }
    return response.json();
  },

  update: async (id, donante) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.DONANTES}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donante),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar donante");
    }
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.DONANTES}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar donante");
    }
    return response.json();
  },
};


import { ENDPOINTS } from "../utils/constants/endpoints";

const API_URL = "http://localhost:3001";

export const entregasService = {
  getAll: async () => {
    const response = await fetch(`${API_URL}${ENDPOINTS.ENTREGAS}`);
    if (!response.ok) {
      throw new Error("Error al obtener entregas");
    }
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.ENTREGAS}/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener entrega");
    }
    return response.json();
  },

  create: async (entrega) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.ENTREGAS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entrega),
    });
    if (!response.ok) {
      throw new Error("Error al crear entrega");
    }
    return response.json();
  },

  update: async (id, entrega) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.ENTREGAS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entrega),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar entrega");
    }
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.ENTREGAS}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar entrega");
    }
    return response.json();
  },
};


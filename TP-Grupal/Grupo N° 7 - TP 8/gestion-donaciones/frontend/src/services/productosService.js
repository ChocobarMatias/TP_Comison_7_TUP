import { ENDPOINTS } from "../utils/constants/endpoints";

const API_URL = "http://localhost:3001";

export const productosService = {
  getAll: async () => {
    const response = await fetch(`${API_URL}${ENDPOINTS.PRODUCTOS}`);
    if (!response.ok) {
      throw new Error("Error al obtener productos");
    }
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.PRODUCTOS}/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener producto");
    }
    return response.json();
  },

  create: async (producto) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.PRODUCTOS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    if (!response.ok) {
      throw new Error("Error al crear producto");
    }
    return response.json();
  },

  update: async (id, producto) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.PRODUCTOS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar producto");
    }
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}${ENDPOINTS.PRODUCTOS}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar producto");
    }
    return response.json();
  },
};


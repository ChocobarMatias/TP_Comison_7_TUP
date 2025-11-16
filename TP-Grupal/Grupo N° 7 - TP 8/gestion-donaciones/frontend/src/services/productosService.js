import { ENDPOINTS } from "../utils/constants/endpoints";
import { httpRequest } from "./httpClient";

export const productosService = {
  getAll: async () => {
    return httpRequest(ENDPOINTS.PRODUCTOS);
  },

  getById: async (id) => {
    return httpRequest(`${ENDPOINTS.PRODUCTOS}/${id}`);
  },

  create: async (producto) => {
    return httpRequest(ENDPOINTS.PRODUCTOS, {
      method: "POST",
      body: producto,
    });
  },

  update: async (id, producto) => {
    return httpRequest(`${ENDPOINTS.PRODUCTOS}/${id}`, {
      method: "PUT",
      body: producto,
    });
  },

  delete: async (id) => {
    return httpRequest(`${ENDPOINTS.PRODUCTOS}/${id}`, {
      method: "DELETE",
    });
  },
};


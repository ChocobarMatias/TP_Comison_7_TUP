import { ENDPOINTS } from "../utils/constants/endpoints";
import { httpRequest } from "./httpClient";

export const entregasService = {
  getAll: async () => {
    return httpRequest(ENDPOINTS.ENTREGAS);
  },

  getById: async (id) => {
    return httpRequest(`${ENDPOINTS.ENTREGAS}/${id}`);
  },

  create: async (entrega) => {
    return httpRequest(ENDPOINTS.ENTREGAS, {
      method: "POST",
      body: entrega,
    });
  },

  update: async (id, entrega) => {
    return httpRequest(`${ENDPOINTS.ENTREGAS}/${id}`, {
      method: "PUT",
      body: entrega,
    });
  },

  delete: async (id) => {
    return httpRequest(`${ENDPOINTS.ENTREGAS}/${id}`, {
      method: "DELETE",
    });
  },
};


import { ENDPOINTS } from "../utils/constants/endpoints";
import { httpRequest } from "./httpClient";

export const donantesService = {
  getAll: async () => {
    return httpRequest(ENDPOINTS.DONANTES);
  },

  getById: async (id) => {
    return httpRequest(`${ENDPOINTS.DONANTES}/${id}`);
  },

  create: async (donante) => {
    return httpRequest(ENDPOINTS.DONANTES, {
      method: "POST",
      body: donante,
    });
  },

  update: async (id, donante) => {
    return httpRequest(`${ENDPOINTS.DONANTES}/${id}`, {
      method: "PUT",
      body: donante,
    });
  },

  delete: async (id) => {
    return httpRequest(`${ENDPOINTS.DONANTES}/${id}`, {
      method: "DELETE",
    });
  },
};


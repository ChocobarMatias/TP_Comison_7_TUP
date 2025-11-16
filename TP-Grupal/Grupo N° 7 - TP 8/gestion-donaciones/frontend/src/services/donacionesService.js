import { ENDPOINTS } from "../utils/constants/endpoints";
import { httpRequest } from "./httpClient";

export const donacionesService = {
  getAll: async () => {
    return httpRequest(ENDPOINTS.DONACIONES);
  },

  getById: async (id) => {
    return httpRequest(`${ENDPOINTS.DONACIONES}/${id}`);
  },

  create: async (donacion) => {
    return httpRequest(ENDPOINTS.DONACIONES, {
      method: "POST",
      body: donacion,
    });
  },

  update: async (id, donacion) => {
    return httpRequest(`${ENDPOINTS.DONACIONES}/${id}`, {
      method: "PUT",
      body: donacion,
    });
  },

  delete: async (id) => {
    return httpRequest(`${ENDPOINTS.DONACIONES}/${id}`, {
      method: "DELETE",
    });
  },
};


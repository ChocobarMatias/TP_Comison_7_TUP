import { ENDPOINTS } from "../utils/constants/endpoints";
import { httpRequest } from "./httpClient";

export const authService = {
  login: async (credentials) =>
    httpRequest(ENDPOINTS.AUTH_LOGIN, { method: "POST", body: credentials }),
  profile: async () => httpRequest(ENDPOINTS.AUTH_PROFILE),
};


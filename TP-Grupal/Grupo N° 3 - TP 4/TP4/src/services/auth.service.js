import { httpClient } from "./httpClient";

export const authService = {
  async login(email, password) {
    const client = httpClient();

    const data = await client.post("/api/auth/login", {
      email,
      password,
    });

    // El backend debe devolver:
    // { token, user }
    return data;
  },
};

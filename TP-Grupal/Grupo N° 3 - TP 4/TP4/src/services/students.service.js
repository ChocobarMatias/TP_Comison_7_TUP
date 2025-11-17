import { httpClient } from "./httpClient";

const client = httpClient();

export const studentsService = {
  async getAll() {
    return await client.get("/api/alumnos");
  },

  async create(data) {
    return await client.post("/api/alumnos", data);
  },

  async update(id, data) {
    return await client.put(`/api/alumnos/${id}`, data);
  },

  async delete(id) {
    return await client.delete(`/api/alumnos/${id}`);
  },
};

// búsqueda en el backend real:
export async function searchStudents(query) {
    const client = httpClient();
    return client.get(`/api/alumnos?search=${encodeURIComponent(query)}`);
}

import { httpClient } from "./httpClient";

const client = httpClient();

export const booksService = {
  async getAll() {
    return await client.get("/api/libros");
  },

  async create(data) {
    return await client.post("/api/libros", data);
  },

  async update(id, data) {
    return await client.put(`/api/libros/${id}`, data);
  },

  async delete(id) {
    return await client.delete(`/api/libros/${id}`);
  },
};

export async function searchBooks(query) {
  const client = httpClient();
  return client.get(`/api/libros?search=${encodeURIComponent(query)}`);
}

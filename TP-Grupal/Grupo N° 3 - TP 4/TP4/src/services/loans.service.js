import { API_URL, ENDPOINTS } from "./endpoints";
import { httpClient } from "./httpClient";

// GET simple: el backend devuelve un ARRAY
export async function listLoans() {
  const res = await fetch(`${API_URL}${ENDPOINTS.loans}`);
  const data = await res.json();

  return {
    rows: data,
    total: data.length,
  };
}

export async function createLoan(payload) {
  const client = httpClient();
  return await client.post(ENDPOINTS.loans, payload);
}

export async function deleteLoan(id) {
  const client = httpClient();
  return await client.del(`${ENDPOINTS.loans}/${id}`);
}

// 👉 función para devolver préstamo
export async function returnLoan(id) {
  const client = httpClient();
  return await client.del(`${ENDPOINTS.loans}/${id}`);
}

export const loansService = {
  list: listLoans,
  create: createLoan,
  delete: deleteLoan,
  returnLoan,
};

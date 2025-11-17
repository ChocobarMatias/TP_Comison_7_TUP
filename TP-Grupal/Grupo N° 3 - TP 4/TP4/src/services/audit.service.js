import { httpClient } from "./httpClient";

export async function getAudit() {
  const client = httpClient();
  return await client.get("/api/audit");
}

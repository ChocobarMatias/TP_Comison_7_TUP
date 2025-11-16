import { buildUrl } from "../utils/constants/endpoints";
import { useUserStore } from "../store/userStore";

export async function httpRequest(endpoint, { method = "GET", body, headers = {} } = {}) {
  const token = useUserStore.getState().token;

  const response = await fetch(buildUrl(endpoint), {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 204) {
    return null;
  }

  let data;
  try {
    data = await response.json();
  } catch (error) {
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    return null;
  }

  if (!response.ok) {
    const message = data?.message || "Ocurrió un error en la solicitud";
    throw new Error(message);
  }

  return data;
}


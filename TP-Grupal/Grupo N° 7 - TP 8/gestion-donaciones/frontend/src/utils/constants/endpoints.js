export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001/api";

export const ENDPOINTS = {
  AUTH_LOGIN: "/auth/login",
  AUTH_PROFILE: "/auth/profile",
  DONANTES: "/donantes",
  PRODUCTOS: "/productos",
  ENTREGAS: "/entregas",
  DONACIONES: "/donaciones",
};

export const buildUrl = (endpoint) => `${API_URL}${endpoint}`;


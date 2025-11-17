import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export const RouterProtect = ({ children }) => {
  const usuario = useUserStore((state) => state.usuario);
  if (!usuario) return <Navigate to="/login" />;
  return children;
};

export const RequireAdmin = ({ children }) => {
  const usuario = useUserStore((state) => state.usuario);
  if (!usuario || usuario.rol !== "admin") {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};


export default RouterProtect;


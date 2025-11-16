import { Navigate } from "react-router-dom";
import { useUserStore, selectToken } from "../store/userStore";

export default function PrivateRoute({ children }) {
  const token = useUserStore(selectToken);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}


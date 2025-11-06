import { Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const RouterProtect = ({ children }) => {
  // Por ahora sin lógica de protección
  // Semana 2 se implementará la validación real
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default RouterProtect;
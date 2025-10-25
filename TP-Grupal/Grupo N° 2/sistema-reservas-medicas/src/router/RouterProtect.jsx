import React from 'react';
import { Navigate } from 'react-router-dom';

const RouterProtect = ({ children }) => {
  // Lógica de protección de rutas (por implementar)
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default RouterProtect;

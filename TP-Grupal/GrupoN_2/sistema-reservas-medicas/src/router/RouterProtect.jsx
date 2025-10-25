import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const RouterProtect = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar autenticación al cargar el componente
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      const userEmail = localStorage.getItem('userEmail');
      
      if (authStatus && userEmail) {
        setIsAuthenticated(true);
      } else {
        // Limpiar datos de autenticación inválidos
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userEmail');
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Mostrar loading mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // Redirigir al login si no está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Renderizar el contenido protegido
  return children;
};

export default RouterProtect;

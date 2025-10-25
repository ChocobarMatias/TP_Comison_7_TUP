import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// --- ESTILOS GLOBALES Y TEMA ---
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-blue: #3B82F6;
    --primary-blue-dark: #2563EB;
    --accent-orange: #F59E0B;
    --light-bg: #F3F6FD;
    --text-dark: #1F2937;
    --text-light: #6B7280;
    --border-color: #E5E7EB;
    --white: #FFFFFF;
    --sidebar-bg: #111827;
    --sidebar-text: #D1D5DB;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif; /* Asegúrate de importar esta fuente en tu index.html */
    color: var(--text-dark);
    background-color: var(--light-bg);
  }
`;

// Tema para Styled Components (puedes usarlo si lo necesitas en el futuro)
const theme = {
  colors: {
    primary: '#3B82F6',
  }
};

// --- IMPORTACIÓN DE PÁGINAS ---
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Productos from './pages/Productos.jsx';
import Clientes from './pages/Clientes.jsx';
import Ventas from './pages/Ventas.jsx';
import HistorialVentas from './pages/Historialventas.jsx';
import Reportes from './pages/Reportes.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        {/* El componente Routes se encarga de decidir qué página mostrar */}
        <Routes>
          {/* Cada Route define una URL y el componente que debe mostrarse */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/historial-ventas" element={<HistorialVentas />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
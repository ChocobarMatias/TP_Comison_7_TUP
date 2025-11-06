import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import Clients from '../pages/Clients'
import Services from '../pages/Services'
import Appointments from '../pages/Appointments'

import "../styles/layout.css"; 

export default function MainLayout({ onLogout }) {
  const [section, setSection] = useState("Dashboard");

  const renderSection = () => {
    switch (section) {
      case "Clientes":
        return <Clients />;
      case "Servicios":
        return <Services />;
      case "Turnos":
        return <Appointments />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="layout-container">
      <Sidebar onSelect={setSection} />
      <div className="layout-content">
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-outline-danger" onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
        {renderSection()}
      </div>
    </div>
  );
}
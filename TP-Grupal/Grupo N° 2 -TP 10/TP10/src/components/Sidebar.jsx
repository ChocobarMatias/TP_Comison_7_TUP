import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { House, Scissors, People, Calendar, Gear } from "react-bootstrap-icons";
import "../styles/sidebar.css"; // 👈 importamos el CSS externo

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("Dashboard");

  const handleSelect = (item) => {
    setActive(item);
    onSelect(item);
  };

  return (
    <div className="sidebar-container">
      <h4 className="sidebar-title">💈 Peluquería</h4>

      <ListGroup variant="flush" className="sidebar-list">
        <ListGroup.Item
          action
          active={active === "Dashboard"}
          onClick={() => handleSelect("Dashboard")}
          className="sidebar-item"
        >
          <House /> Dashboard
        </ListGroup.Item>

        <ListGroup.Item
          action
          active={active === "Clientes"}
          onClick={() => handleSelect("Clientes")}
          className="sidebar-item"
        >
          <People /> Clientes
        </ListGroup.Item>

        <ListGroup.Item
          action
          active={active === "Turnos"}
          onClick={() => handleSelect("Turnos")}
          className="sidebar-item"
        >
          <Calendar /> Turnos
        </ListGroup.Item>

          <ListGroup.Item
          action
          active={active === "Servicios"}
          onClick={() => handleSelect("Servicios")}
          className="sidebar-item"
        >
          <Scissors /> Servicios
        </ListGroup.Item>


      </ListGroup>
    </div>
  );
}

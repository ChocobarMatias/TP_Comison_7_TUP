import React from "react";
import { Nav } from "react-bootstrap";
import { HouseDoorFill, PeopleFill, BarChartFill, GearFill } from "react-bootstrap-icons";
import "./Sidebar.css";

const Sidebar = () => {


    return(

        <Nav className="flex-column bg-light h-100 d-flex shadow-sm p-3">
            <Nav.Link href="/dashboard" className="d-flex align-items-center mb-2">
                <HouseDoorFill size={20} className="me-2"/>
                Inicio
            </Nav.Link>
            <Nav.Link href="/miembros" className="d-flex align-items-center mb-2">
                <PeopleFill size={20} className="me-2"/>
                Miembros
            </Nav.Link>
            <Nav.Link href="/reportes" className="d-flex align-items-center mb-2">
                <BarChartFill size={20} className="me-2"/>
                Reportes
            </Nav.Link>
            <Nav.Link href="/configuracion" className="d-flex align-items-center mt-auto">
                <GearFill size={20} className="me-2"/>
                Configuración
            </Nav.Link>
        </Nav>
    )
}

export default Sidebar;
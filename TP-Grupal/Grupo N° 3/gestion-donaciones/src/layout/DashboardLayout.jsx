import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Barra lateral */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex-grow-1 p-4 bg-light">
        <Outlet />
      </div>
    </div>
  );
}

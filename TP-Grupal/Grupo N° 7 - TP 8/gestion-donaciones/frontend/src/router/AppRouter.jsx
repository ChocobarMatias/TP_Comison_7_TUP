import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import DashboardLayout from "../layout/DashboardLayout";
import SeccionDonaciones from "../pages/SeccionDonaciones";
import Donantes from "../pages/Donantes"; 
import Entregas from "../pages/Entregas";
import PrivateRoute from "../components/PrivateRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública: Login */}
        <Route path="/" element={<Login />} />

        {/* Rutas privadas protegidas */}
        <Route
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="/SeccionDonaciones" element={<SeccionDonaciones />} />
          <Route path="/Donantes" element={<Donantes />} />
          <Route path="/Entregas" element={<Entregas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


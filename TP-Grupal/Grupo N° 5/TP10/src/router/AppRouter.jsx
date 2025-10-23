import MainLayout from '../layout/MainLayout'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Clients from '../pages/Clients'
import Services from '../pages/Services'
import Appointments from '../pages/Appointments'


//Este archivo servirá para manejar las rutas del sistema más adelante

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Login (inicio de sesión simulado) */}
        <Route path="/" element={<Login />} />

        {/* Main Layout con las páginas dentro */}
        <Route path="/app" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="clientes" element={<Clients />} />
          <Route path="servicios" element={<Services />} />
          <Route path="turnos" element={<Appointments />} />
        </Route>
      </Routes>
    </Router>
  );
}
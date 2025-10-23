import { Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <div
      className="bg-dark text-white d-flex flex-column justify-content-between p-3"
      style={{ width: "240px", minHeight: "100vh" }}
    >
      {/* Parte superior: navegación */}
      <div>
        <h4 className="mb-4 text-center fw-bold">HOME</h4>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/SeccionDonaciones" className="text-white">
            Sección Donaciones
          </Nav.Link>
          <Nav.Link as={Link} to="/Donantes" className="text-white">
            Donantes
          </Nav.Link>
          <Nav.Link as={Link} to="/Entregas" className="text-white">
            Entregas
          </Nav.Link>
        </Nav>
      </div>

      {/* Parte inferior: cerrar sesión */}
      <div className="text-center mt-auto">
        <Button
          variant="outline-light"
          size="sm"
          className="w-100 mt-3"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right me-2"></i>
          Cerrar sesión
        </Button>
        <p className="mt-2 mb-0 text-secondary small">
          Sesión iniciada como:{" "}
          <strong>{JSON.parse(localStorage.getItem("user"))?.name}</strong>
        </p>
      </div>
    </div>
  );
}

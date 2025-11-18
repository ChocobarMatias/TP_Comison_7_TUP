import { Table, Badge, Spinner, Alert } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import { ENDPOINTS } from "../utils/constants/endpoints";

export default function Donantes() {
  const { data: donantes, loading, error } = useFetch(ENDPOINTS.DONANTES);

  if (loading) {
    return (
      <div className="container mt-4 d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <Alert variant="danger">Error al cargar donantes: {error}</Alert>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Título estilo card */}
      <h2 className="mb-4 fw-bold text-center text-white py-3 rounded shadow" 
          style={{ backgroundColor: "#0d6efd", fontSize: "1.8rem" }}>
        Listado de Donantes
      </h2>

      {donantes && donantes.length > 0 ? (
        <Table
        striped
        hover
        responsive
        className="shadow-sm rounded border"
        style={{ backgroundColor: "#ffffff" }}
      >
        <thead className="text-center" style={{ backgroundColor: "#0d6efd", color: "#fff" }}>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Monto Donado</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {donantes.map((d, idx) => (
            <tr
              key={d.id}
              className="align-middle text-center"
              style={{
                backgroundColor: idx % 2 === 0 ? "#e9f2ff" : "#ffffff",
                transition: "all 0.2s",
              }}
            >
              <td>{d.id}</td>
              <td className="fw-semibold">{d.nombre}</td>
              <td>{d.email}</td>
              <td className="fw-bold text-primary">${d.monto.toLocaleString()}</td>
              <td>
                <Badge
                  bg={d.activo ? "success" : "warning"}
                  className="px-3 py-2"
                  style={{ fontSize: "0.95rem" }}
                >
                  {d.activo ? "Activo" : "Inactivo"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      ) : (
        <Alert variant="info">No hay donantes disponibles.</Alert>
      )}
    </div>
  );
}


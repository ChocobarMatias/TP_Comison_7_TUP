import { useState, useEffect } from "react";
import { Card, Row, Col, ProgressBar, Spinner } from "react-bootstrap";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [stats, setStats] = useState(null); // datos simulados
  const [loading, setLoading] = useState(true); // indicador de carga

  useEffect(() => {
    // Simular carga de datos (como si vinieran de una API)
    setTimeout(() => {
      setStats({
        totalClients: 26,
        employees: 9,
        appointments: 16,
        services: 10,
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2 text-muted">Cargando datos...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h3 className="mb-4 fw-bold">Dashboard General</h3>

      <Row className="g-3 mb-4">
        <Col md={3}>
          <Card className="stat-box">
            <Card.Body>
              <h6 className="stat-title">Total Clientes</h6>
              <h2 className="stat-value">{stats.totalClients}</h2>
              <ProgressBar now={85} variant="info" className="stat-bar" />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="stat-box">
            <Card.Body>
              <h6 className="stat-title">Empleados</h6>
              <h2 className="stat-value">{stats.employees}</h2>
              <ProgressBar now={60} variant="success" className="stat-bar" />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="stat-box">
            <Card.Body>
              <h6 className="stat-title">Turnos Hoy</h6>
              <h2 className="stat-value">{stats.appointments}</h2>
              <ProgressBar now={70} variant="warning" className="stat-bar" />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="stat-box">
            <Card.Body>
              <h6 className="stat-title">Servicios</h6>
              <h2 className="stat-value">{stats.services}</h2>
              <ProgressBar now={90} variant="primary" className="stat-bar" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="summary-card">
        <Card.Body>
          <Card.Title>Resumen del día</Card.Title>
          <p>
            Hoy se realizaron {stats.appointments} turnos, con un total de{" "}
            {stats.services} servicios activos.  
            El servicio más solicitado fue <strong>Corte Clásico</strong>.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const Dashboard = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    // Datos simulados para el dashboard
    const datosSimulados = [
      { id: 1, paciente: 'Juan Pérez', medico: 'Dr. García', fecha: '2024-10-25', hora: '09:00', especialidad: 'Cardiología' },
      { id: 2, paciente: 'María López', medico: 'Dra. Martínez', fecha: '2024-10-25', hora: '10:30', especialidad: 'Pediatría' },
      { id: 3, paciente: 'Carlos Ruiz', medico: 'Dr. Fernández', fecha: '2024-10-25', hora: '11:00', especialidad: 'Traumatología' }
    ];
    setTurnos(datosSimulados);
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h3>Dashboard - Turnos del Día</h3>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Paciente</th>
                    <th>Médico</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Especialidad</th>
                  </tr>
                </thead>
                <tbody>
                  {turnos.map(turno => (
                    <tr key={turno.id}>
                      <td>{turno.id}</td>
                      <td>{turno.paciente}</td>
                      <td>{turno.medico}</td>
                      <td>{turno.fecha}</td>
                      <td>{turno.hora}</td>
                      <td>{turno.especialidad}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

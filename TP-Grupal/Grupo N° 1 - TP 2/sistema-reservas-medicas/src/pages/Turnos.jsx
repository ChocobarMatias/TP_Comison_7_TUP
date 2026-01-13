import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Form,
  Badge,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useAppointments } from "../hooks/useAppointments";
import { useDoctors } from "../hooks/useDoctors";
import { usePatients } from "../hooks/usePatients";
import AppointmentFormModal from "../components/TurnoFormModal";
const Turnos = () => {
  const {
    appointments,
    isLoading,
    error,
    fetchAppointments,
    deleteAppointment,
    searchAppointments,
    getAppointmentsByStatus,
    updateAppointment
  } = useAppointments();
  const { doctors } = useDoctors();
  const { patients } = usePatients();
  const [showModal, setShowModal] = useState(false);
  const { createAppointment } = useAppointments(); 
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [citas, setSelectedCita] = useState(null);

  useEffect(() => {
    if (filterStatus) {
      getAppointmentsByStatus(filterStatus);
    } else if (searchTerm) {
      searchAppointments(searchTerm);
    } else {
      fetchAppointments();
    }
  }, [filterStatus]);

    const handleNewTurno = () => {
    setSelectedCita(null);
    setShowModal(true);
  };

  const handleEditTurno = (appointment) => {
  setSelectedAppointment(appointment); 
  setShowModal(true);
};
  
const handleSaveTurno = async (turnoData) => {

  let result;

  if (selectedAppointment) {
    // Si ya había turno seleccionado → UPDATE
    result = await updateAppointment(selectedAppointment.id, turnoData);
  } else {
    // Si no hay turno seleccionado → CREATE
    result = await createAppointment(turnoData);
  }

  if (result.success) {
    alert(result.message || "Turno guardado correctamente");
    setShowModal(false);
    setSelectedAppointment(null);
  } else {
    alert(`Error: ${result.error}`);
  }
};

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchAppointments(searchTerm);
    } else {
      fetchAppointments();
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este turno?")) {
      const result = await deleteAppointment(id);
      if (result.success) {
        alert(result.message || "Turno eliminado exitosamente");
      } else {
        alert(`Error: ${result.error}`);
      }
    }
  };

  const getDoctorName = (doctor_id) => {
    const doctor = doctors.find((d) => d.id === doctor_id);
    return doctor ? doctor.nombre : "Desconocido";
  };

  const getPatientName = (patient_id) => {
    const patient = patients.find((p) => p.id === patient_id);
    return patient ? `${patient.nombre} ${patient.apellido}` : "Desconocido";
  };

  const getStatusBadge = (estado) => {
    const variants = {
      pendiente: "warning",
      confirmado: "primary",
      cancelado: "danger",
      completado: "success",
    };
    return (
      <Badge bg={variants[estado] || "secondary"}>{estado.toUpperCase()}</Badge>
    );
  };

const formatDate = (fecha) => {
  const soloFecha = fecha.split("T")[0]; 
  const [year, month, day] = soloFecha.split("-");
  return `${day}/${month}/${year}`;
};
  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h2>Gestión de Turnos</h2>
          <p className="text-muted">Administra los turnos médicos</p>
        </Col>
      </Row>

      {error && (
        <Alert
          variant="danger"
          dismissible
          onClose={() => window.location.reload()}
        >
          {error}
        </Alert>
      )}

      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleSearch}>
            <Row className="g-3">
              <Col md={5}>
                <Form.Control
                  type="text"
                  placeholder="Buscar por motivo, estado u observaciones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Col>
              <Col md={3}>
                <Form.Select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="">Todos los estados</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="confirmado">Confirmado</option>
                  <option value="cancelado">Cancelado</option>
                  <option value="completado">Completado</option>
                </Form.Select>
              </Col>
              <Col md={2}>
                <Button variant="primary" type="submit" className="w-100">
                  Buscar
                </Button>
              </Col>
              <Col md={2}>
                <Button
                  variant="success"
                  className="w-100"
                  onClick={handleNewTurno}
                >
                  Nuevo Turno
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          {isLoading ? (
            <div className="text-center py-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando...</span>
              </Spinner>
              <p className="mt-3 text-muted">Cargando turnos...</p>
            </div>
          ) : appointments.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">No hay turnos registrados</p>
            </div>
          ) : (
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Doctor</th>
                  <th>Paciente</th>
                  <th>Motivo</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{formatDate(appointment.fecha)}</td>
                    <td>{appointment.hora}</td>
                    <td>{getDoctorName(appointment.doctor_id)}</td>
                    <td>{getPatientName(appointment.paciente_id)}</td>
                    <td>{appointment.motivo}</td>
                    <td>{getStatusBadge(appointment.estado)}</td>
                    <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditTurno(appointment)}
                        >
                          Editar
                        </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(appointment.id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
          <AppointmentFormModal
  show={showModal}
  onHide={() => {
    setShowModal(false);
    setSelectedAppointment(null);
  }}
  onSave={handleSaveTurno}
  doctors={doctors}
  patients={patients}
  appointment={selectedAppointment}
/>
    </Container>
  );
};

export default Turnos;

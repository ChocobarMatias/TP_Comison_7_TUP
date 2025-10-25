import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Form, Button, Badge, InputGroup, Alert } from 'react-bootstrap';
import Modal from '../components/Modal';
import { generateId } from '../utils/helpers';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [pacientesFiltrados, setPacientesFiltrados] = useState([]);
  const [filtros, setFiltros] = useState({
    busqueda: '',
    edad: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('nuevo');
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  useEffect(() => {
    // Datos simulados de pacientes
    const datosSimulados = [
      {
        id: 1,
        nombre: 'Juan Pérez',
        apellido: 'García',
        dni: '12345678',
        fechaNacimiento: '1985-03-15',
        telefono: '123-456-7890',
        email: 'juan.perez@email.com',
        direccion: 'Av. Principal 123',
        ciudad: 'Buenos Aires',
        obraSocial: 'OSDE',
        numeroAfiliado: '123456789',
        fechaRegistro: '2024-01-15',
        activo: true
      },
      {
        id: 2,
        nombre: 'María',
        apellido: 'López',
        dni: '87654321',
        fechaNacimiento: '1990-07-22',
        telefono: '098-765-4321',
        email: 'maria.lopez@email.com',
        direccion: 'Calle Secundaria 456',
        ciudad: 'Córdoba',
        obraSocial: 'Swiss Medical',
        numeroAfiliado: '987654321',
        fechaRegistro: '2024-02-10',
        activo: true
      },
      {
        id: 3,
        nombre: 'Carlos',
        apellido: 'Ruiz',
        dni: '11223344',
        fechaNacimiento: '1978-11-08',
        telefono: '555-123-4567',
        email: 'carlos.ruiz@email.com',
        direccion: 'Plaza Central 789',
        ciudad: 'Rosario',
        obraSocial: 'Galeno',
        numeroAfiliado: '112233445',
        fechaRegistro: '2024-03-05',
        activo: false
      }
    ];
    setPacientes(datosSimulados);
    setPacientesFiltrados(datosSimulados);
  }, []);

  useEffect(() => {
    // Aplicar filtros
    let filtrados = pacientes;

    if (filtros.busqueda) {
      const busqueda = filtros.busqueda.toLowerCase();
      filtrados = filtrados.filter(paciente => 
        paciente.nombre.toLowerCase().includes(busqueda) ||
        paciente.apellido.toLowerCase().includes(busqueda) ||
        paciente.dni.includes(busqueda) ||
        paciente.email.toLowerCase().includes(busqueda)
      );
    }

    if (filtros.edad) {
      const edadMinima = parseInt(filtros.edad);
      const hoy = new Date();
      filtrados = filtrados.filter(paciente => {
        const fechaNac = new Date(paciente.fechaNacimiento);
        const edad = hoy.getFullYear() - fechaNac.getFullYear();
        return edad >= edadMinima;
      });
    }

    setPacientesFiltrados(filtrados);
  }, [pacientes, filtros]);

  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const limpiarFiltros = () => {
    setFiltros({
      busqueda: '',
      edad: ''
    });
  };

  const handleNuevoPaciente = () => {
    setModalType('nuevo');
    setPacienteSeleccionado(null);
    setShowModal(true);
  };

  const handleEditarPaciente = (id) => {
    const paciente = pacientes.find(p => p.id === id);
    if (paciente) {
      setModalType('editar');
      setPacienteSeleccionado(paciente);
      setShowModal(true);
    }
  };

  const handleSavePaciente = (pacienteData) => {
    if (modalType === 'nuevo') {
      setPacientes(prev => [...prev, pacienteData]);
    } else {
      setPacientes(prev => prev.map(p => p.id === pacienteData.id ? pacienteData : p));
    }
    setShowModal(false);
    setPacienteSeleccionado(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPacienteSeleccionado(null);
  };

  const handleEliminarPaciente = (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar este paciente?')) {
      setPacientes(prev => prev.filter(p => p.id !== id));
    }
  };

  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    return edad;
  };

  const getStatusBadge = (activo) => {
    return activo ? 
      <Badge bg="success">Activo</Badge> : 
      <Badge bg="secondary">Inactivo</Badge>;
  };

  return (
    <Container className="mt-4">
      {/* Filtros */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>
              <h5>Filtros y Búsqueda</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Búsqueda</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Buscar por nombre, apellido, DNI o email..."
                        value={filtros.busqueda}
                        onChange={(e) => handleFiltroChange('busqueda', e.target.value)}
                      />
                      <Button 
                        variant="outline-secondary" 
                        onClick={limpiarFiltros}
                      >
                        Limpiar
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Edad mínima</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ej: 18"
                      value={filtros.edad}
                      onChange={(e) => handleFiltroChange('edad', e.target.value)}
                      min="0"
                      max="120"
                    />
                  </Form.Group>
                </Col>
                <Col md={3} className="d-flex align-items-end">
                  <div>
                    <small className="text-muted">
                      Total: {pacientesFiltrados.length} pacientes
                    </small>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tabla de Pacientes */}
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5>Pacientes ({pacientesFiltrados.length})</h5>
              <Button variant="primary" size="sm" onClick={handleNuevoPaciente}>
                + Nuevo Paciente
              </Button>
            </Card.Header>
            <Card.Body>
              {pacientesFiltrados.length === 0 ? (
                <Alert variant="info">
                  No se encontraron pacientes con los filtros aplicados.
                </Alert>
              ) : (
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre Completo</th>
                        <th>DNI</th>
                        <th>Edad</th>
                        <th>Contacto</th>
                        <th>Obra Social</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pacientesFiltrados.map(paciente => (
                        <tr key={paciente.id}>
                          <td>{paciente.id}</td>
                          <td>
                            <div>
                              <strong>{paciente.nombre} {paciente.apellido}</strong>
                              <br />
                              <small className="text-muted">
                                Registrado: {new Date(paciente.fechaRegistro).toLocaleDateString('es-AR')}
                              </small>
                            </div>
                          </td>
                          <td>{paciente.dni}</td>
                          <td>{calcularEdad(paciente.fechaNacimiento)} años</td>
                          <td>
                            <div>
                              <small>{paciente.telefono}</small>
                              <br />
                              <small className="text-muted">{paciente.email}</small>
                            </div>
                          </td>
                          <td>
                            <div>
                              <small>{paciente.obraSocial}</small>
                              <br />
                              <small className="text-muted">#{paciente.numeroAfiliado}</small>
                            </div>
                          </td>
                          <td>{getStatusBadge(paciente.activo)}</td>
                          <td>
                            <div className="d-flex gap-1">
                              <Button 
                                variant="outline-primary" 
                                size="sm"
                                onClick={() => handleEditarPaciente(paciente.id)}
                              >
                                ✏️
                              </Button>
                              <Button 
                                variant="outline-danger" 
                                size="sm"
                                onClick={() => handleEliminarPaciente(paciente.id)}
                              >
                                🗑️
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal para Nuevo/Editar Paciente */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        title={modalType === 'nuevo' ? 'Nuevo Paciente' : 'Editar Paciente'}
        onSave={() => {}} // Se maneja en el formulario
        onCancel={handleCloseModal}
        saveText="Guardar"
        cancelText="Cancelar"
        size="lg"
      >
        <PacienteForm
          paciente={pacienteSeleccionado}
          onSave={handleSavePaciente}
          onCancel={handleCloseModal}
        />
      </Modal>
    </Container>
  );
};

// Componente de formulario para pacientes (se implementará después)
const PacienteForm = ({ paciente, onSave, onCancel }) => {
  return (
    <div className="text-center p-4">
      <h5>Formulario de Paciente</h5>
      <p>Formulario completo por implementar en la próxima iteración</p>
      <p>Paciente: {paciente ? `${paciente.nombre} ${paciente.apellido}` : 'Nuevo'}</p>
      <Button variant="secondary" onClick={onCancel}>
        Cerrar
      </Button>
    </div>
  );
};

export default Pacientes;

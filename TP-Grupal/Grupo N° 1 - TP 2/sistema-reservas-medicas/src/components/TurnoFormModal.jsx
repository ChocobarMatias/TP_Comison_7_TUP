import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const AppointmentFormModal = ({ show, onHide, onSave, doctors, patients }) => {
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    doctor_id: "",
    paciente_id: "",
    motivo: "",
    estado: "pendiente",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Turno</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              name="fecha"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="time"
              name="hora"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Doctor</Form.Label>
            <Form.Select name="doctor_id" onChange={handleChange}>
              <option value="">Seleccionar...</option>
              {doctors.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.nombre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Paciente</Form.Label>
            <Form.Select name="paciente_id" onChange={handleChange}>
              <option value="">Seleccionar...</option>
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nombre} {p.apellido}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Motivo</Form.Label>
            <Form.Control
              name="motivo"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => onSave(formData)}>
          Guardar Turno
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AppointmentFormModal;

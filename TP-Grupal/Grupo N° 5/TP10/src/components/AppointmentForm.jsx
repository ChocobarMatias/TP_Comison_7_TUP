import { Form, Button } from 'react-bootstrap'

export default function AppointmentForm() {
  return (
    <div>
      <h5>Asignar Turno</h5>
      <Form className="d-flex gap-2 mb-3 flex-wrap">
        <Form.Control placeholder="Cliente" />
        <Form.Control placeholder="Servicio" />
        <Form.Control type="date" />
        <Form.Control type="time" />
        <Button variant="primary">Asignar</Button>
      </Form>
    </div>
  )
}

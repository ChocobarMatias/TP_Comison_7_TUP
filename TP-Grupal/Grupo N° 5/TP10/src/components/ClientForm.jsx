import { Form, Button } from 'react-bootstrap'

export default function ClientForm() {
  return (
    <div>
      <h5>Agregar Cliente</h5>
      <Form className="d-flex gap-2 mb-3">
        <Form.Control placeholder="Nombre" />
        <Form.Control placeholder="Email" />
        <Button variant="success">Guardar</Button>
      </Form>
    </div>
  )
}

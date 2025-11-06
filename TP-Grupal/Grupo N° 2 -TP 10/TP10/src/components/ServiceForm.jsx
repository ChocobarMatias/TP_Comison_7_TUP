import { Form, Button } from 'react-bootstrap'

export default function ServiceForm() {
  return (
    <div>
      <h5>Agregar Servicio</h5>
      <Form className="d-flex gap-2 mb-3">
        <Form.Control placeholder="Servicio" />
        <Form.Control placeholder="Precio" />
        <Button variant="success">Guardar</Button>
      </Form>
    </div>
  )
}

import React from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { dataCards, usuarios } from '../../utils/fakeData'; 
import CardComponent from '../../components/Card';
import TablaUser from '../../components/TablaUser';
import { PeopleFill, PersonCheckFill, PersonXFill } from 'react-bootstrap-icons';

const Dashboard = () => {
  const [metrics, setMetrics] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

React.useEffect(() => {
  // 1. El setTimeout sigue estando fuera
  const timer = setTimeout(() => {
    try {

      setMetrics(dataCards);
      setUsers(usuarios);

    } catch (err) {
      console.error(err); 
      setError('Error al cargar los datos.');
    } finally {
    
      setLoading(false);
    }
  }, 1000);


  return () => clearTimeout(timer);

}, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Spinner animation="border" variant="primary" />
        <span className="ms-3 fs-4">Cargando panel...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h1 className="h2">Dashboard (con datos falsos)</h1>
        </Col>
      </Row>

      <Row className="mb-4">
        <CardComponent
          titulo="Miembros Totales"
          valor={metrics.totalSocios}
          variante="primary"
          icono={<PeopleFill />}
        />
        <CardComponent
          titulo="Miembros Activos"
          valor={metrics.sociosActivos}
          variante="success"
          icono={<PersonCheckFill />}
        />
        <CardComponent
          titulo="Miembros Inactivos"
          valor={metrics.sociosInactivos}
          variante="danger" 
          icono={<PersonXFill />}
        />
      </Row>

      <Row>
        <Col>
          <h2 className="h4 mb-3">Usuarios</h2>
          <TablaUser usuarios={users} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
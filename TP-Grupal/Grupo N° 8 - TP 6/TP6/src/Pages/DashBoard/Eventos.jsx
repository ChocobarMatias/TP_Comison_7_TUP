import React, { useState, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import ModalFormularioEvento from "../../Components/EventCard.jsx";
import TablaComponent from "../../Components/Tabla.jsx";
import { getAll } from "../../Utils/utils";

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const cargarEventos = () => {
    const listaActualizada = getAll("eventos");
    setEventos(listaActualizada);
  };

  useEffect(() => {
    cargarEventos();
  }, []);

  const columnasEventos = [
    { header: "Nombre", field: "nombre" },
    { header: "Fecha", field: "fecha" },
    { header: "Lugar", field: "lugar" },
    {
      header: "Cupo",
      render: (item) =>
        item.asistentes ? `${item.asistentes.length}/${item.cupo}` : item.cupo,
    },
  ];

  return (
    <Container fluid className="my-4">
      <div className="d-flex justify-content-center">
        <h2 className="mb-4">Gestión de Eventos </h2>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="mb-4"
        >
          <i className="bi bi-calendar-plus-fill me-2"></i> Añadir Nuevo Evento
        </Button>
      </div>
      <Card className="shadow-sm">
        <Card.Header as="h5" className="bg-dark text-white">
          Listado de Eventos
        </Card.Header>
        <Card.Body>
          <TablaComponent
            datos={eventos}
            columnas={columnasEventos}
            onVerDetalle={() => {}}
            onEliminar={() => {}}
          />
        </Card.Body>
      </Card>

      <ModalFormularioEvento
        show={showModal}
        handleClose={() => setShowModal(false)}
        onEventAdded={cargarEventos}
      />
    </Container>
  );
}

export default Eventos;

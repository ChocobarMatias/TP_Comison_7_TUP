import React, { useState, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import TablaComponent from "../../Components/Tabla.jsx";
import ModalFormularioAsistente from "../../Components/AsistenteCard.jsx";
import { getAll } from "../../Utils/utils";

function Asistentes() {
  const [asistentes, setAsistentes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const cargarAsistentes = () => {
    const data = getAll("asistentes");
    setAsistentes(data);
  };

  useEffect(() => {
    cargarAsistentes();
  }, []);

  const columnas = [
    { header: "Nombre", field: "nombre" },
    { header: "Apellido", field: "apellido" },
    { header: "Fecha", field: "fechaNac" },
  ];

  const handleModalClose = () => {
    setShowModal(false);
    cargarAsistentes();
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <Container fluid className="my-4">
      <div className="d-flex justify-content-center">
        <h2 className="mb-4">Gestión de Asistentes </h2>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={handleShowModal} className="mb-4">
          <i className="bi bi-person-plus-fill me-2"></i>
          Añadir Nuevo Asistente
        </Button>
      </div>
      <Card className="shadow-sm">
        <Card.Header as="h5" className="bg-dark text-white">
          Listado de Asistentes
        </Card.Header>
        <Card.Body>
          <TablaComponent
            datos={asistentes}
            columnas={columnas}
            onVerDetalle={(item) => console.log("Ver detalle:", item)}
            onEliminar={(item) => console.log("Eliminar:", item)}
          />
        </Card.Body>
      </Card>

      <ModalFormularioAsistente
        show={showModal}
        handleClose={handleModalClose}
        onAsistenteAdded={handleModalClose}
      />
    </Container>
  );
}

export default Asistentes;

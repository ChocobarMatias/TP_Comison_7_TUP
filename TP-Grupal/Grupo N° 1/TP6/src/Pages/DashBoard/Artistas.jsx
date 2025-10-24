import { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { getAll } from "../../Utils/utils.js";
import TablaComponent from "../../Components/Tabla.jsx";
import ModalFormularioArtista from "../../Components/ArtistaCard.jsx";

function Artistas() {
  const [artistas, setArtistas] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const cargarArtistas = () => {
    const artistasObtenidos = getAll("artistas");
    setArtistas(artistasObtenidos);
  };

  useEffect(() => {
    cargarArtistas();
  }, []);

  const columnas = [
    { header: "Nombre Artístico", field: "nombreArt" },
    { header: "Nombre", field: "nombre" },
    { header: "Apellido", field: "apellido" },
    { header: "DNI", field: "dni" },
  ];

  return (
    <Container fluid className="my-4">
      <div className="d-flex justify-content-center">
        <h2 className="mb-4">Gestión de Artistas </h2>
      </div>
      <div className="d-flex justify-content-center">
      <Button
        variant="primary"
        onClick={() => setShowModal(true)}
        className="mb-4"
      >
        <i className="bi bi-music-note-beamed me-2"></i>
        Añadir Nuevo Artista
      </Button>
      </div>
      <Card className="shadow-sm">
        <Card.Header as="h5" className="bg-dark text-white">
          Listado de Artistas
        </Card.Header>
        <Card.Body>
          <TablaComponent
            datos={artistas}
            columnas={columnas}
            onVerDetalle={(item) => console.log("Ver detalle:", item)}
            onEliminar={(item) => console.log("Eliminar:", item)}
          />
        </Card.Body>
      </Card>

      <ModalFormularioArtista
        show={showModal}
        handleClose={() => setShowModal(false)}
        onArtistaAdded={cargarArtistas}
      />
    </Container>
  );
}

export default Artistas;

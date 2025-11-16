import React, { useState } from "react";
import EntregaItem from "../components/EntregaItem";
import FormularioEntrega from "../components/FormEntregas";
import { Spinner, Alert } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import { entregasService } from "../services";
import { ENDPOINTS } from "../utils/constants/endpoints";

const EntregasPage = () => {
  const { data: entregas, loading, error, refetch } = useFetch(ENDPOINTS.ENTREGAS);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAgregarEntrega = async (nuevaEntrega) => {
    try {
      setIsSubmitting(true);
      await entregasService.create(nuevaEntrega);
      refetch?.();
    } catch (err) {
      console.error("Error al crear entrega:", err);
      alert(err.message || "Error al crear la entrega. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <Alert variant="danger">Error al cargar entregas: {error}</Alert>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <FormularioEntrega onAgregarEntrega={handleAgregarEntrega} isSubmitting={isSubmitting} />

      <h1 className="mb-4 mt-5">Seguimiento de Entregas</h1>

      {entregas && entregas.length > 0 ? (
        entregas.map((entrega) => <EntregaItem key={entrega.id} entrega={entrega} />)
      ) : (
        <Alert variant="info">Aún no hay entregas registradas.</Alert>
      )}
    </div>
  );
};

export default EntregasPage;


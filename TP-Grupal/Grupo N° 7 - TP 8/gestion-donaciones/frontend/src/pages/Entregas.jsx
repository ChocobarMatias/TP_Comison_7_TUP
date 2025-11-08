import React, { useState } from 'react';
import EntregaItem from '../components/EntregaItem';
import FormularioEntrega from '../components/FormEntregas';
import { Spinner, Alert } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import { entregasService } from '../services';

const EntregasPage = () => {
  const { data: entregas, loading, error, refetch } = useFetch("http://localhost:3001/entregas");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para agregar una nueva entrega a la lista
  const handleAgregarEntrega = async (nuevaEntrega) => {
    try {
      setIsSubmitting(true);
      await entregasService.create(nuevaEntrega);
      // Recargar las entregas después de crear una nueva
      if (refetch) refetch();
    } catch (err) {
      console.error("Error al crear entrega:", err);
      alert("Error al crear la entrega. Por favor, intenta nuevamente.");
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
      {/* Incluimos el formulario y le pasamos la función para agregar entregas */}
      <FormularioEntrega onAgregarEntrega={handleAgregarEntrega} isSubmitting={isSubmitting} />
      
      <h1 className="mb-4 mt-5">Seguimiento de Entregas</h1>
      
      {/* Si no hay entregas, mostramos un mensaje */}
      {entregas && entregas.length > 0 ? (
        entregas.map(entrega => (
          <EntregaItem key={entrega.id} donacion={entrega} />
        ))
      ) : (
        <Alert variant="info">Aún no hay entregas pendientes.</Alert>
      )}
    </div>
  );
};

export default EntregasPage;


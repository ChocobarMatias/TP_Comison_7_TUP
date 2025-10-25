import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/sidebar';
import MainContent from '../components/layout/maincontent';
// No se usa DataTable aquí

// Reutilización del layout base de Clientes.jsx
const PageContainer = styled.div`
  display: flex;
`;

// Reutilización del ContentWrapper para el contenido principal
const ContentWrapper = styled.div`
  background-color: var(--white);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

// Estilos específicos para el formulario de venta
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-dark);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.9rem;
  &:focus {
    outline: none;
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background-color: var(--primary-blue);
  color: var(--white);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--primary-blue-dark);
  }
`;

const Ventas = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainContent
        title="Registrar Nueva Venta"
        description="Completa los detalles para procesar la transacción."
      >
        <ContentWrapper>
          <form>
            <FormGrid>
              <FormRow>
                <Label htmlFor="cliente">Cliente</Label>
                {/* En un caso real, esto sería un componente Select o Autocomplete */}
                <Input id="cliente" type="text" placeholder="Buscar cliente por nombre..." />
              </FormRow>
              <FormRow>
                <Label htmlFor="fecha">Fecha de Venta</Label>
                <Input id="fecha" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
              </FormRow>
            </FormGrid>
            
            {/* Sección para agregar productos (Simplificada) */}
            <h3 style={{marginTop: '30px', marginBottom: '15px'}}>Detalle de Productos</h3>
            <ContentWrapper style={{padding: '15px', marginBottom: '25px', borderStyle: 'dashed'}}>
                <p style={{margin: 0, color: 'var(--text-light)'}}>
                    [Placeholder para la tabla de productos de la venta]
                </p>
                <PrimaryButton style={{marginTop: '10px'}} type="button">
                    <i className="fa-solid fa-plus"></i> Agregar Producto
                </PrimaryButton>
            </ContentWrapper>
            
            <PrimaryButton type="submit">
              <i className="fa-solid fa-paper-plane"></i>
              Finalizar Venta
            </PrimaryButton>
          </form>
        </ContentWrapper>
      </MainContent>
    </PageContainer>
  );
};

export default Ventas;
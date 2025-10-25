import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/sidebar';
import MainContent from '../components/layout/maincontent';
import DataTable from '../components/tables/datatable'; // Asegúrate que la ruta a tu DataTable sea correcta

const PageContainer = styled.div`
  display: flex;
`;

const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const SearchBar = styled.div`
  position: relative;
  width: 350px;
  i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-light);
  }
  input {
    width: 100%;
    padding: 10px 15px 10px 40px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 0.9rem;
    &:focus {
      outline: none;
      border-color: var(--primary-blue);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
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

const ContentWrapper = styled.div`
  background-color: var(--white);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const Clientes = () => {
  // Datos de ejemplo para la tabla de clientes
  const clientData = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@email.com',
      phone: '11-2345-6789',
    },
    {
      id: 2,
      name: 'María García',
      email: 'maria.garcia@email.com',
      phone: '11-9876-5432',
    },
    {
      id: 3,
      name: 'Carlos López',
      email: 'carlos.lopez@email.com',
      phone: '11-5555-4444',
    },
  ];

  // Definición de las columnas para el DataTable
  const columns = [
    { header: 'Nombre', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Teléfono', accessor: 'phone' },
    { header: 'Acciones', accessor: 'actions', type: 'actions' }, // El tipo 'actions' renderizará los botones
  ];

  return (
    <PageContainer>
      <Sidebar />
      <MainContent
        title="Gestión de Clientes"
        description="Registra y administra la información de tus clientes."
      >
        <PageActions>
          <SearchBar>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Buscar por nombre o email..." />
          </SearchBar>
          <PrimaryButton>
            <i className="fa-solid fa-plus"></i>
            Nuevo Cliente
          </PrimaryButton>
        </PageActions>

        <ContentWrapper>
          <DataTable columns={columns} data={clientData} />
        </ContentWrapper>
      </MainContent>
    </PageContainer>
  );
};

export default Clientes;
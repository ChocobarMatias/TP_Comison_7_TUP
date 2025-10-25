import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/sidebar';
import MainContent from '../components/layout/maincontent';
import DataTable from '../components/tables/datatable'; // Asegúrate que la ruta a tu DataTable sea correcta

// Reutilización de estilos de Clientes.jsx

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

const HistorialVentas = () => {
  // Datos de ejemplo para la tabla de historial de ventas
  const salesData = [
    {
      id: 1001,
      date: '2025-10-24',
      client: 'Juan Pérez',
      total: '$150.99',
      status: 'Completada',
    },
    {
      id: 1002,
      date: '2025-10-24',
      client: 'María García',
      total: '$45.50',
      status: 'Completada',
    },
    {
      id: 1003,
      date: '2025-10-23',
      client: 'Carlos López',
      total: '$320.00',
      status: 'Anulada',
    },
  ];

  // Definición de las columnas para el DataTable
  const columns = [
    { header: 'ID Venta', accessor: 'id' },
    { header: 'Fecha', accessor: 'date' },
    { header: 'Cliente', accessor: 'client' },
    { header: 'Total', accessor: 'total' },
    { header: 'Estado', accessor: 'status' },
    { header: 'Acciones', accessor: 'actions', type: 'actions' },
  ];

  return (
    <PageContainer>
      <Sidebar />
      <MainContent
        title="Historial de Ventas"
        description="Consulta, filtra y gestiona todas las transacciones realizadas."
      >
        <PageActions>
          <SearchBar>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Buscar por ID o cliente..." />
          </SearchBar>
          <PrimaryButton>
            <i className="fa-solid fa-file-export"></i>
            Exportar Reporte
          </PrimaryButton>
        </PageActions>

        <ContentWrapper>
          <DataTable columns={columns} data={salesData} />
        </ContentWrapper>
      </MainContent>
    </PageContainer>
  );
};

export default HistorialVentas;
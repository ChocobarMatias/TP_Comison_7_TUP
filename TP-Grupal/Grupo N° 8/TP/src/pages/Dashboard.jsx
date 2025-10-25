import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/sidebar';
import MainContent from '../components/layout/maincontent';
import ActionCard from '../components/dashboard/actioncard';

const PageContainer = styled.div`
  display: flex;
`;

const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

const Dashboard = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainContent
        title="Dashboard"
        description="Resumen general de tu local de indumentaria."
      >
        <QuickActionsGrid>
          <ActionCard 
            to="/productos"
            icon="shirt"
            title="Productos"
            description="Gestiona tu inventario, talles y colores."
          />
          <ActionCard 
            to="/ventas"
            icon="cash-register"
            title="Registrar Venta"
            description="Crea una nueva venta y descuenta stock."
          />
          <ActionCard 
            to="/clientes"
            icon="users"
            title="Clientes"
            description="Administra la información de tus clientes."
          />
          <ActionCard 
            to="/reportes"
            icon="chart-pie"
            title="Reportes"
            description="Analiza tus ventas y rendimiento."
          />
        </QuickActionsGrid>
      </MainContent>
    </PageContainer>
  );
};

export default Dashboard;
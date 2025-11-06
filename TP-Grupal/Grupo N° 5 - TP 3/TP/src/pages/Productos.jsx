import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/sidebar';
import MainContent from '../components/layout/maincontent';
import DataTable from '../components/tables/datatable';
import Button from '../components/common/button';
import Modal from '../components/common/Modal';
import ProductForm from '../components/forms/Productform';


const PageContainer = styled.div`
  display: flex;
`;

const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const ContentWrapper = styled.div`
  background-color: var(--white);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const Productos = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const productData = [
    { id: 1, name: 'Camisa Algodón', sku: 'CAM-001', category: 'Camisas', price: '$35.00', stock: 15 },
    { id: 2, name: 'Pantalón Jean', sku: 'PANT-005', category: 'Pantalones', price: '$50.00', stock: 8 },
  ];

  const columns = [
    { header: 'Nombre', accessor: 'name' }, { header: 'SKU', accessor: 'sku' },
    { header: 'Categoría', accessor: 'category' }, { header: 'Precio', accessor: 'price' },
    { header: 'Stock', accessor: 'stock', type: 'stock-status' }, { header: 'Acciones', type: 'actions' },
  ];

  return (
    <PageContainer>
      <Sidebar />
      <MainContent
        title="Gestión de Productos"
        description="Añade, edita y organiza tu inventario de indumentaria."
      >
        <PageActions>
          {/* Aquí podrías poner una barra de búsqueda si quieres */}
          <div></div>
          <Button variant="primary" icon="plus" onClick={() => setModalOpen(true)}>
            Nuevo Producto
          </Button>
        </PageActions>

        <ContentWrapper>
          <DataTable columns={columns} data={productData} />
        </ContentWrapper>
        
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setModalOpen(false)}
          title="Nuevo Producto"
        >
          <ProductForm 
            onSave={() => console.log('Guardado!')}
            onCancel={() => setModalOpen(false)}
          />
        </Modal>

      </MainContent>
    </PageContainer>
  );
};

export default Productos;
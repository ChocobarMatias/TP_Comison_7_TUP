import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
  vertical-align: middle;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-light);
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
  vertical-align: middle;
  font-size: 0.95rem;

  &:last-child {
    border-bottom: none; /* Estilo de la última fila */
  }
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;

const StatusTag = styled.span`
  padding: 5px 12px;
  border-radius: 15px;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
  ${props => props.type === 'stock-alto' && `background-color: #D1FAE5; color: #065F46;`}
  ${props => props.type === 'stock-bajo' && `background-color: #FEF3C7; color: #92400E;`}
  ${props => props.type === 'stock-agotado' && `background-color: #FEE2E2; color: #991B1B;`}
  ${props => props.type === 'completado' && `background-color: #D1FAE5; color: #065F46;`}
  ${props => props.type === 'en-proceso' && `background-color: #DBEAFE; color: #1E40AF;`}
  ${props => props.type === 'pendiente' && `background-color: #FEF3C7; color: #92400E;`}
  ${props => props.type === 'cancelado' && `background-color: #FEE2E2; color: #991B1B;`}
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: var(--text-light);
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: var(--primary-blue);
  }

  &.danger:hover {
    color: #DC2626;
  }
`;

const DataTable = ({ columns, data }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <TableHeader key={index}>{col.header}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <TableCell key={colIndex}>
                {col.type === 'image' && <ProductImage src={row[col.accessor]} alt="Producto" />}
                {col.type === 'text' && row[col.accessor]}
                {col.type === 'stock-status' && (
                  <StatusTag
                    type={
                      row[col.accessor] > 10 ? 'stock-alto' :
                      row[col.accessor] > 0 ? 'stock-bajo' : 'stock-agotado'
                    }
                  >
                    {row[col.accessor] > 0 ? `${row[col.accessor]} en Stock` : 'Agotado'}
                  </StatusTag>
                )}
                {col.type === 'status' && ( // Para status de pedidos/ventas
                    <StatusTag type={row[col.accessor].toLowerCase().replace(' ', '-')}>
                        {row[col.accessor]}
                    </StatusTag>
                )}
                {col.type === 'actions' && (
                  <ActionButtonsContainer>
                    <ActionButton><i className="fa-solid fa-pencil"></i></ActionButton>
                    <ActionButton className="danger"><i className="fa-solid fa-trash"></i></ActionButton>
                  </ActionButtonsContainer>
                )}
              </TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default DataTable;
import React from 'react';
import styled, { css } from 'styled-components';

const KpiCardContainer = styled.div`
  background-color: var(--white);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const KpiIcon = styled.div`
  font-size: 1.8rem;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Icon color variants */
  ${({ color }) => color === 'green' && css` background-color: #D1FAE5; color: #065F46; `}
  ${({ color }) => color === 'blue' && css` background-color: #DBEAFE; color: #1E40AF; `}
  ${({ color }) => color === 'yellow' && css` background-color: #FEF3C7; color: #92400E; `}
  ${({ color }) => color === 'purple' && css` background-color: #E0E7FF; color: #4338CA; `}
`;

const KpiInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const KpiTitle = styled.span`
  font-size: 0.9rem;
  color: var(--text-light);
  font-weight: 500;
`;

const KpiValue = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 5px 0;
`;

const KpiComparison = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ type }) => (type === 'increase' ? '#16A34A' : type === 'decrease' ? '#DC2626' : 'var(--text-light)')};
`;

const KpiCard = ({ icon, color = 'blue', title, value, comparisonText, comparisonType }) => {
  return (
    <KpiCardContainer>
      <KpiIcon color={color}>
        <i className={`fa-solid fa-${icon}`} />
      </KpiIcon>
      <KpiInfo>
        <KpiTitle>{title}</KpiTitle>
        <KpiValue>{value}</KpiValue>
        <KpiComparison type={comparisonType}>{comparisonText}</KpiComparison>
      </KpiInfo>
    </KpiCardContainer>
  );
};

export default KpiCard;
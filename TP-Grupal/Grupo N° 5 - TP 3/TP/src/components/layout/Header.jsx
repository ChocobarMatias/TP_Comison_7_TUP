import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
  }
`;

const HeaderTitle = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    color: var(--text-light);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LogoutLink = styled(Link)`
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ title, description }) => {
  return (
    <MainHeaderContainer>
      <HeaderTitle>
        <h1>{title}</h1>
        <p>{description}</p>
      </HeaderTitle>
      <UserInfo>
        <span>Hola, <strong>[Usuario]</strong></span>
        <LogoutLink to="/">Cerrar Sesión</LogoutLink>
      </UserInfo>
    </MainHeaderContainer>
  );
};

export default Header;
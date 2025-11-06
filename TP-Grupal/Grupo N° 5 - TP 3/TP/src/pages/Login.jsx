import React, { useState } from 'react'; // CORRECCIÓN: Agregado useState
import { useNavigate } from 'react-router-dom'; // CORRECCIÓN: Agregado useNavigate para la redirección
import styled from 'styled-components';
import Input from '../components/common/input';
import Button from '../components/common/button';
import logoImage from '../assets/logo.jpg';
import illustrationImage from '../assets/ilustration.png'; // Asegúrate que el nombre del archivo sea exacto

const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: var(--white);
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 420px;
`;

const IllustrationSection = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-bg);
    // Nota: El contenedor Styled-Component debe ser 'position: relative;'
    // si quieres que el div de fondo quede por debajo de la imagen.
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Login = () => {
  // Inicialización de hooks
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Credenciales de Simulación
    const MOCK_EMAIL = 'admin@tienda.com';
    const MOCK_PASSWORD = '123';

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      console.log('Login exitoso! Redirigiendo...');
      // REDIRECCIÓN: Usa la función navigate al dashboard
      navigate('/dashboard'); 
    } else {
      setError('Credenciales inválidas. Usa: ' + MOCK_EMAIL + ' / ' + MOCK_PASSWORD);
    }
  };

  return (
    <LoginContainer>
      <FormSection>
        <FormWrapper>
          {/* <img src={logoImage} alt="Logo" style={{ width: '100px', marginBottom: '30px' }} /> */}
          <h2>Bienvenido de Vuelta</h2>
          <p>Ingresa tus credenciales para acceder al sistema.</p>
          <form 
            onSubmit={handleSubmit} // Agregado el manejador de envío
            style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <Input 
              label="Correo Electrónico" 
              id="email" 
              type="email" 
              placeholder="tucorreo@ejemplo.com"
              value={email} // Conexión con el estado
              onChange={(e) => setEmail(e.target.value)} // Manejo de estado
              required
            />
            <Input 
              label="Contraseña" 
              id="password" 
              type="password" 
              placeholder="••••••••"
              value={password} // Conexión con el estado
              onChange={(e) => setPassword(e.target.value)} // Manejo de estado
              required
            />
            
            {/* Muestra el error */}
            {error && <p style={{ color: 'red', margin: '0', fontWeight: '500' }}>{error}</p>}
            
            <Button type="submit" variant="primary" style={{ marginTop: '10px' }}>Ingresar</Button>
          </form>
        </FormWrapper>
      </FormSection>
      <IllustrationSection>
        {/* CORRECCIÓN: Descomentado y simplificado para mostrar la imagen */}
        <img src={illustrationImage} alt="Ilustración de tienda de ropa" /> 
      </IllustrationSection>
    </LoginContainer>
  );
};

export default Login;
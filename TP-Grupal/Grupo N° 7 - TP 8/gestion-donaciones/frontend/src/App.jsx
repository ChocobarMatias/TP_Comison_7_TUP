import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./Styles/Styles.css";
import { useUserStore, selectUser } from "./store/userStore";

export default function App() {
  const user = useUserStore(selectUser);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Gestión de Donaciones</Navbar.Brand>
          {user && (
            <Navbar.Text className="text-light">
              Bienvenido, <strong>{user.nombre}</strong>
            </Navbar.Text>
          )}
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}


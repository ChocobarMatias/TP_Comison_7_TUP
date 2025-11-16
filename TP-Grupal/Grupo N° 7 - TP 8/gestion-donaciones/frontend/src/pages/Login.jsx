import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button, InputGroup, Spinner } from "react-bootstrap";
import { authService } from "../services";
import { useUserStore, selectToken } from "../store/userStore";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token = useUserStore(selectToken);
  const setSession = useUserStore((state) => state.setSession);

  useEffect(() => {
    if (token) {
      navigate("/SeccionDonaciones", { replace: true });
    }
  }, [token, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { token: newToken, user } = await authService.login({
        username,
        password,
      });
      setSession(user, newToken);
      navigate("/SeccionDonaciones", { replace: true });
    } catch (err) {
      setError(err.message || "Credenciales inválidas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="login-card shadow-lg">
        <h3 className="text-center mb-4 text-primary fw-bold">Iniciar Sesión</h3>

        {error && <div className="alert alert-danger py-2 text-center">{error}</div>}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-person-fill"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Ingresá tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-lock-fill"></i>
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Ingresá tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Button type="submit" className="w-100 mt-2 fw-semibold" variant="primary" disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" /> Iniciando...
              </>
            ) : (
              "Ingresar"
            )}
          </Button>
        </Form>

        <p className="text-muted text-center mt-3" style={{ fontSize: "0.9rem" }}>
          Usuario: <strong>admin</strong> — Contraseña: <strong>1234</strong>
        </p>
      </Card>
    </div>
  );
}


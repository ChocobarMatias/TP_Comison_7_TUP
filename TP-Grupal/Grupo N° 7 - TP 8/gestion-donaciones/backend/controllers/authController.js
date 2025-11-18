const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { query } = require("../utils/dbHelpers");

async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Usuario y contraseña obligatorios" });
  }

  try {
    const users = await query(
      "SELECT id, username, nombre_completo AS nombreCompleto, rol, password_hash FROM usuarios WHERE username = ?",
      [username]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const payload = {
      id: user.id,
      username: user.username,
      nombre: user.nombreCompleto,
      rol: user.rol,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    return res.json({ token, user: payload });
  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function profile(req, res) {
  return res.json({ user: req.user });
}

module.exports = { login, profile };


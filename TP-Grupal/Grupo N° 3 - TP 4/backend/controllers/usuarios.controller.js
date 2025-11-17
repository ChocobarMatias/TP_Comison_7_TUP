import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  findUserByEmail,
  createUser,
  getAllUsers,
  findUserById
} from "../models/usuarios.model.js";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email y password requeridos" });

    const user = await findUserByEmail(email);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    // WARNING: ejemplo sin hash. Recomendar uso de bcrypt en producción.
    if (user.password !== password) return res.status(401).json({ error: "Credenciales inválidas" });

    const token = jwt.sign({ id: user.id, rol: user.rol, nombre: user.nombre }, JWT_SECRET, { expiresIn: "2h" });

    res.json({
      mensaje: "Login exitoso",
      usuario: { id: user.id, nombre: user.nombre, rol: user.rol, email: user.email },
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno" });
  }
};

// CRUD mínimos
export const create = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;
    if (!nombre || !email || !password) return res.status(400).json({ error: "Faltan datos" });

    // Nota: en producción hashear password con bcrypt
    const { id } = await createUser({ nombre, email, password, rol: rol || "user" });
    const user = await findUserById(id);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creando usuario" });
  }
};

export const list = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error listando usuarios" });
  }
};

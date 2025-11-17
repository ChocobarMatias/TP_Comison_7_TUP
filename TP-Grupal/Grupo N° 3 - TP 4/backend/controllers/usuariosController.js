import jwt from "jsonwebtoken";
import { getUserByEmail } from "../models/usuarios.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        nombre: user.nombre,
        rol: user.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      usuario: {
        id: user.id,
        nombre: user.nombre,
        rol: user.rol,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error en el login" });
  }
};

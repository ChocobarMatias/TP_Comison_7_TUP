import db from "../db.js";

export const findUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM usuarios WHERE email = ?", [email]);
  return rows[0];
};

export const findUserById = async (id) => {
  const [rows] = await db.query("SELECT id, nombre, email, rol FROM usuarios WHERE id = ?", [id]);
  return rows[0];
};

export const createUser = async ({ nombre, email, password, rol }) => {
  const [result] = await db.query(
    "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
    [nombre, email, password, rol]
  );
  return { id: result.insertId };
};

export const getAllUsers = async () => {
  const [rows] = await db.query("SELECT id, nombre, email, rol FROM usuarios");
  return rows;
};

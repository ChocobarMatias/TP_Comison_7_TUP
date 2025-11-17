import db from "../config/db.js";

export const getUserByEmail = async (email) => {
  const [rows] = await db.promise().query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
  );
  return rows[0];
};

export const getAllUsers = async () => {
  const [rows] = await db.promise().query("SELECT * FROM usuarios");
  return rows;
};

export const createUser = async (nombre, email, password, rol) => {
  const [result] = await db.promise().query(
    "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
    [nombre, email, password, rol]
  );
  return result.insertId;
};

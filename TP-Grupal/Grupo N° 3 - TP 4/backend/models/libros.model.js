import db from "../config/db.js";

export const getAllLibros = async () => {
  const [rows] = await db.promise().query("SELECT * FROM libros");
  return rows;
};

export const getLibroById = async (id) => {
  const [rows] = await db.promise().query(
    "SELECT * FROM libros WHERE id = ?",
    [id]
  );
  return rows[0];
};

export const createLibro = async (titulo, autor, año, stock) => {
  const [result] = await db.promise().query(
    "INSERT INTO libros (titulo, autor, año, stock) VALUES (?, ?, ?, ?)",
    [titulo, autor, año, stock]
  );
  return result.insertId;
};

export const updateLibro = async (id, titulo, autor, año, stock) => {
  await db.promise().query(
    "UPDATE libros SET titulo = ?, autor = ?, año = ?, stock = ? WHERE id = ?",
    [titulo, autor, año, stock, id]
  );
};

export const deleteLibro = async (id) => {
  await db.promise().query("DELETE FROM libros WHERE id = ?", [id]);
};

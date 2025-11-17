import db from "../config/db.js";

export async function getAllLibros() {
  const [rows] = await db.promise().query("SELECT * FROM libros");
  return rows;
}

export async function getLibroById(id) {
  const [rows] = await db.promise().query("SELECT * FROM libros WHERE id = ?", [id]);
  return rows[0];
}

export async function createLibro(titulo, autor, categoria, cantidad, cantidadDisponible) {
  const [result] = await db.promise().query(
    "INSERT INTO libros (titulo, autor, categoria, cantidad, cantidadDisponible) VALUES (?, ?, ?, ?, ?)",
    [titulo, autor, categoria, cantidad, cantidadDisponible]
  );
  return result.insertId;
}

export async function updateLibro(id, titulo, autor, categoria, cantidad, cantidadDisponible) {
  await db.promise().query(
    "UPDATE libros SET titulo=?, autor=?, categoria=?, cantidad=?, cantidadDisponible=? WHERE id=?",
    [titulo, autor, categoria, cantidad, cantidadDisponible, id]
  );
}

export async function deleteLibro(id) {
  await db.promise().query("DELETE FROM libros WHERE id=?", [id]);
}

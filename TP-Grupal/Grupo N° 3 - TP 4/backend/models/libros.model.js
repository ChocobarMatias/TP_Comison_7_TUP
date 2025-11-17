import { pool } from "../config/db.js";

// Obtener todos los libros
export const getAllLibros = async () => {
  const [rows] = await pool.query(`
    SELECT 
      id, titulo, autor, categoria, cantidad, cantidadDisponible
    FROM libros
  `);
  return rows;
};

// Obtener libro por ID
export const getLibroById = async (id) => {
  const [rows] = await pool.query(
    `SELECT id, titulo, autor, categoria, cantidad, cantidadDisponible 
     FROM libros WHERE id = ?`,
    [id]
  );
  return rows[0];
};

// Crear libro
export const createLibro = async (titulo, autor, categoria, cantidad, cantidadDisponible) => {
  const [result] = await pool.query(
    `INSERT INTO libros (titulo, autor, categoria, cantidad, cantidadDisponible)
     VALUES (?, ?, ?, ?, ?)`,
    [titulo, autor, categoria, cantidad, cantidadDisponible]
  );
  return result.insertId;
};

// Editar libro
export const updateLibro = async (id, titulo, autor, categoria, cantidad, cantidadDisponible) => {
  await pool.query(
    `UPDATE libros 
     SET titulo = ?, autor = ?, categoria = ?, cantidad = ?, cantidadDisponible = ?
     WHERE id = ?`,
    [titulo, autor, categoria, cantidad, cantidadDisponible, id]
  );
};

// Eliminar libro
export const deleteLibro = async (id) => {
  await pool.query(`DELETE FROM libros WHERE id = ?`, [id]);
};

import { pool } from "../config/db.js";


export async function getAllPrestamos() {
  const [rows] = await pool.promise().query(`
    SELECT p.*, 
           l.titulo AS libro, 
           a.nombre AS alumno
    FROM prestamos p
    JOIN libros l ON p.libroId = l.id
    JOIN alumnos a ON p.alumnoId = a.id
  `);
  return rows;
}

export async function createPrestamo(libroId, alumnoId, fechaPrestamo, fechaDevolucion) {
  const [result] = await pool.promise().query(
    "INSERT INTO prestamos (libroId, alumnoId, fechaPrestamo, fechaDevolucion) VALUES (?, ?, ?, ?)",
    [libroId, alumnoId, fechaPrestamo, fechaDevolucion]
  );
  return result.insertId;
}

export async function deletePrestamo(id) {
  await pool.promise().query("DELETE FROM prestamos WHERE id = ?", [id]);
}

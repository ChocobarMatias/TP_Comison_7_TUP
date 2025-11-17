import db from "../config/db.js";

export async function getAllPrestamos() {
  const [rows] = await db.promise().query(`
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
  const [result] = await db.promise().query(
    "INSERT INTO prestamos (libroId, alumnoId, fechaPrestamo, fechaDevolucion) VALUES (?, ?, ?, ?)",
    [libroId, alumnoId, fechaPrestamo, fechaDevolucion]
  );
  return result.insertId;
}

export async function deletePrestamo(id) {
  await db.promise().query("DELETE FROM prestamos WHERE id = ?", [id]);
}

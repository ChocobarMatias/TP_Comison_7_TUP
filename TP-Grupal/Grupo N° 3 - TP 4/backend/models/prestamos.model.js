import db from "../config/db.js";

export const getAllPrestamos = async () => {
  const [rows] = await db.promise().query(
    `SELECT prestamos.*, libros.titulo AS libro, alumnos.nombre AS alumno
     FROM prestamos
     JOIN libros ON prestamos.libro_id = libros.id
     JOIN alumnos ON prestamos.alumno_id = alumnos.id`
  );
  return rows;
};

export const createPrestamo = async (libro_id, alumno_id, fecha_prestamo, fecha_devolucion) => {
  const [result] = await db.promise().query(
    "INSERT INTO prestamos (libro_id, alumno_id, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)",
    [libro_id, alumno_id, fecha_prestamo, fecha_devolucion]
  );
  return result.insertId;
};

export const deletePrestamo = async (id) => {
  await db.promise().query("DELETE FROM prestamos WHERE id=?", [id]);
};

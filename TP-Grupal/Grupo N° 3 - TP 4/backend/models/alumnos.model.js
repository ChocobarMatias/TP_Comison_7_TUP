import { pool } from "../config/db.js";


// Obtener todos los alumnos
export const getAllAlumnos = async () => {
  const [rows] = await pool.query(`
    SELECT 
      id, nombre, apellido, dni, email, telefono
    FROM alumnos
  `);
  return rows;
};

// Obtener alumno por ID
export const getAlumnoById = async (id) => {
  const [rows] = await pool.query(
    `SELECT id, nombre, apellido, dni, email, telefono 
     FROM alumnos WHERE id = ?`,
    [id]
  );
  return rows[0];
};

// Crear alumno
export const createAlumno = async (nombre, apellido, dni, email, telefono) => {
  const [result] = await pool.query(
    `INSERT INTO alumnos (nombre, apellido, dni, email, telefono)
     VALUES (?, ?, ?, ?, ?)`,
    [nombre, apellido, dni, email, telefono]
  );
  return result.insertId;
};

// Editar alumno
export const updateAlumno = async (id, nombre, apellido, dni, email, telefono) => {
  await pool.query(
    `UPDATE alumnos
     SET nombre = ?, apellido = ?, dni = ?, email = ?, telefono = ?
     WHERE id = ?`,
    [nombre, apellido, dni, email, telefono, id]
  );
};

// Eliminar alumno
export const deleteAlumno = async (id) => {
  await pool.query(`DELETE FROM alumnos WHERE id = ?`, [id]);
};

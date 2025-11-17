import db from "../config/db.js";

export async function getAllAlumnos() {
  const [rows] = await db.promise().query("SELECT * FROM alumnos");
  return rows;
}

export async function getAlumnoById(id) {
  const [rows] = await db.promise().query("SELECT * FROM alumnos WHERE id = ?", [id]);
  return rows[0];
}

export async function createAlumno(nombre, apellido, dni, email, telefono) {
  const [result] = await db.promise().query(
    "INSERT INTO alumnos (nombre, apellido, dni, email, telefono) VALUES (?, ?, ?, ?, ?)",
    [nombre, apellido, dni, email, telefono]
  );
  return result.insertId;
}

export async function updateAlumno(id, nombre, apellido, dni, email, telefono) {
  await db.promise().query(
    "UPDATE alumnos SET nombre=?, apellido=?, dni=?, email=?, telefono=? WHERE id=?",
    [nombre, apellido, dni, email, telefono, id]
  );
}

export async function deleteAlumno(id) {
  await db.promise().query("DELETE FROM alumnos WHERE id = ?", [id]);
}

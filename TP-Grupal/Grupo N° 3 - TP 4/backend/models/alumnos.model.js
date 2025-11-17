import db from "../config/db.js";


export const getAllAlumnos = async () => {
  const [rows] = await db.promise().query("SELECT * FROM alumnos");
  return rows;
};

export const getAlumnoById = async (id) => {
  const [rows] = await db.promise().query(
    "SELECT * FROM alumnos WHERE id = ?",
    [id]
  );
  return rows[0];
};

export const createAlumno = async (nombre, curso, dni) => {
  const [result] = await db.promise().query(
    "INSERT INTO alumnos (nombre, curso, dni) VALUES (?, ?, ?)",
    [nombre, curso, dni]
  );
  return result.insertId;
};

export const updateAlumno = async (id, nombre, curso, dni) => {
  await db.promise().query(
    "UPDATE alumnos SET nombre=?, curso=?, dni=? WHERE id=?",
    [nombre, curso, dni, id]
  );
};

export const deleteAlumno = async (id) => {
  await db.promise().query("DELETE FROM alumnos WHERE id=?", [id]);
};

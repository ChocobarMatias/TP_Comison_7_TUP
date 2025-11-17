import {
  getAllAlumnos,
  getAlumnoById,
  createAlumno,
  updateAlumno,
  deleteAlumno,
} from "../models/alumnos.model.js";

export const obtenerAlumnos = async (req, res) => {
  res.json(await getAllAlumnos());
};

export const obtenerAlumno = async (req, res) => {
  const alumno = await getAlumnoById(req.params.id);
  res.json(alumno);
};

export const crearAlumno = async (req, res) => {
  const { nombre, apellido, dni, email, telefono } = req.body;

  const id = await createAlumno(nombre, apellido, dni, email, telefono);
  res.json({ mensaje: "Alumno creado", id });
};

export const editarAlumno = async (req, res) => {
  const { nombre, apellido, dni, email, telefono } = req.body;

  await updateAlumno(req.params.id, nombre, apellido, dni, email, telefono);

  res.json({ mensaje: "Alumno actualizado" });
};

export const eliminarAlumno = async (req, res) => {
  await deleteAlumno(req.params.id);

  res.json({ mensaje: "Alumno eliminado" });
};

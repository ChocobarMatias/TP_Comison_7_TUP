import {
  getAllPrestamos,
  createPrestamo,
  deletePrestamo,
} from "../models/prestamos.model.js";

export const obtenerPrestamos = async (req, res) => {
  res.json(await getAllPrestamos());
};

export const crearPrestamo = async (req, res) => {
  const { libroId, alumnoId, fechaPrestamo, fechaDevolucion } = req.body;

  const id = await createPrestamo(libroId, alumnoId, fechaPrestamo, fechaDevolucion);
  res.json({ mensaje: "Préstamo creado", id });
};

export const eliminarPrestamo = async (req, res) => {
  await deletePrestamo(req.params.id);
  res.json({ mensaje: "Préstamo eliminado" });
};

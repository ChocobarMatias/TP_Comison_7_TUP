import { getAllPrestamos, createPrestamo, deletePrestamo } from "../models/prestamos.model.js";
import { createAuditLog } from "../models/audit.model.js";

export const obtenerPrestamos = async (req, res) => {
  res.json(await getAllPrestamos());
};

export const crearPrestamo = async (req, res) => {
  const { libro_id, alumno_id, fecha_prestamo, fecha_devolucion } = req.body;
  const id = await createPrestamo(libro_id, alumno_id, fecha_prestamo, fecha_devolucion);
  await createAuditLog("Crear préstamo", req.user.nombre);
  res.json({ mensaje: "Préstamo creado", id });
};

export const eliminarPrestamo = async (req, res) => {
  await deletePrestamo(req.params.id);
  await createAuditLog("Eliminar préstamo", req.user.nombre);
  res.json({ mensaje: "Préstamo eliminado" });
};

import {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro,
} from "../models/libros.model.js";
import { createAuditLog } from "../models/audit.model.js";

export const obtenerLibros = async (req, res) => {
  const data = await getAllLibros();
  res.json(data);
};

export const obtenerLibro = async (req, res) => {
  const libro = await getLibroById(req.params.id);
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  res.json(libro);
};

export const crearLibro = async (req, res) => {
  const { titulo, autor, año, stock } = req.body;

  const id = await createLibro(titulo, autor, año, stock);
  await createAuditLog("Crear libro", req.user?.nombre || "Sistema");

  res.json({ mensaje: "Libro creado correctamente", id });
};

export const editarLibro = async (req, res) => {
  const { titulo, autor, año, stock } = req.body;

  await updateLibro(req.params.id, titulo, autor, año, stock);
  await createAuditLog("Editar libro", req.user?.nombre || "Sistema");

  res.json({ mensaje: "Libro actualizado correctamente" });
};

export const eliminarLibro = async (req, res) => {
  await deleteLibro(req.params.id);

  await createAuditLog("Eliminar libro", req.user?.nombre || "Sistema");

  res.json({ mensaje: "Libro eliminado correctamente" });
};

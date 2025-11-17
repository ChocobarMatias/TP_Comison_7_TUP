import {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro,
} from "../models/libros.model.js";

export const obtenerLibros = async (req, res) => {
  res.json(await getAllLibros());
};

export const obtenerLibro = async (req, res) => {
  const libro = await getLibroById(req.params.id);
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  res.json(libro);
};

export const crearLibro = async (req, res) => {
  const { titulo, autor, categoria, cantidad, cantidadDisponible } = req.body;

  const id = await createLibro(titulo, autor, categoria, cantidad, cantidadDisponible);
  res.json({ mensaje: "Libro creado correctamente", id });
};

export const editarLibro = async (req, res) => {
  const { titulo, autor, categoria, cantidad, cantidadDisponible } = req.body;

  await updateLibro(req.params.id, titulo, autor, categoria, cantidad, cantidadDisponible);
  res.json({ mensaje: "Libro actualizado correctamente" });
};

export const eliminarLibro = async (req, res) => {
  await deleteLibro(req.params.id);
  res.json({ mensaje: "Libro eliminado correctamente" });
};

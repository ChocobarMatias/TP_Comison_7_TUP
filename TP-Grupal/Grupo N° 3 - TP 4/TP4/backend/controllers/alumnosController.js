import {
  getAllAlumnos,
  getAlumnoById,
  createAlumno,
  updateAlumno,
  deleteAlumno,
} from "../models/alumnos.model.js";
import { createAuditLog } from "../models/audit.model.js";

export const obtenerAlumnos = async (req, res) => {
  res.json(await getAllAlumnos());
};

export const obtenerAlumno = async (req, res) => {
  const alumno = await getAlumnoById(req.params.id);
  res.json(alumno);
};

export const crearAlumno = async (req, res) => {
  const { nombre, curso, dni } = req.body;
  const id = await createAlumno(nombre, curso, dni);
  await createAuditLog("Crear alumno", req.user.nombre);
  res.json({ mensaje: "Alumno creado", id });
};

export const editarAlumno = async (req, res) => {
  const { nombre, curso, dni } = req.body;
  await updateAlumno(req.params.id, nombre, curso, dni);
  await createAuditLog("Editar alumno", req.user.nombre);
  res.json({ mensaje: "Alumno actualizado" });
};

export const eliminarAlumno = async (req, res) => {
  await deleteAlumno(req.params.id);
  await createAuditLog("Eliminar alumno", req.user.nombre);
  res.json({ mensaje: "Alumno eliminado" });
};


export const createNewProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, cantidad } = req.body;
    if (!nombre) return res.status(400).json({ error: "Nombre requerido" });
    const result = await createProducto({ nombre, descripcion, precio: precio || 0, cantidad: cantidad || 0 });
    const producto = await getProductoById(result.id);
    res.status(201).json(producto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creando producto" });
  }
};

export const updateExistingProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    await updateProducto(id, body);
    const producto = await getProductoById(id);
    res.json(producto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error actualizando producto" });
  }
};

export const removeProducto = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProducto(id);
    res.json({ mensaje: "Producto eliminado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error eliminando producto" });
  }
};

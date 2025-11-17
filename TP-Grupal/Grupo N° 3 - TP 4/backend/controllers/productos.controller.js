import {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
} from "../models/productos.model.js";

export const listProductos = async (req, res) => {
  try {
    const rows = await getAllProductos();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error listando productos" });
  }
};

export const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const row = await getProductoById(id);
    if (!row) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(row);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener producto" });
  }
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

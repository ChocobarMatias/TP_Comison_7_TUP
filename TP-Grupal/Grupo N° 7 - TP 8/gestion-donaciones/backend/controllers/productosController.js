const { query, execute } = require("../utils/dbHelpers");

async function getProductos(req, res) {
  try {
    const productos = await query(
      "SELECT id, nombre, categoria, cantidad, unidad FROM productos ORDER BY id ASC"
    );
    return res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function getProducto(req, res) {
  const { id } = req.params;

  try {
    const productos = await query(
      "SELECT id, nombre, categoria, cantidad, unidad FROM productos WHERE id = ?",
      [id]
    );

    if (productos.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.json(productos[0]);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function createProducto(req, res) {
  const { nombre, categoria, cantidad, unidad } = req.body;

  if (!nombre || !categoria || cantidad === undefined || !unidad) {
    return res.status(400).json({
      message: "Nombre, categoría, cantidad y unidad son obligatorios",
    });
  }

  try {
    const result = await execute(
      "INSERT INTO productos (nombre, categoria, cantidad, unidad) VALUES (?, ?, ?, ?)",
      [nombre, categoria, cantidad, unidad]
    );

    const productos = await query(
      "SELECT id, nombre, categoria, cantidad, unidad FROM productos WHERE id = ?",
      [result.insertId]
    );

    return res.status(201).json(productos[0]);
  } catch (error) {
    console.error("Error al crear producto:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function updateProducto(req, res) {
  const { id } = req.params;
  const { nombre, categoria, cantidad, unidad } = req.body;

  try {
    const result = await execute(
      "UPDATE productos SET nombre = ?, categoria = ?, cantidad = ?, unidad = ? WHERE id = ?",
      [nombre, categoria, cantidad, unidad, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    const productos = await query(
      "SELECT id, nombre, categoria, cantidad, unidad FROM productos WHERE id = ?",
      [id]
    );

    return res.json(productos[0]);
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function deleteProducto(req, res) {
  const { id } = req.params;

  try {
    const result = await execute("DELETE FROM productos WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

module.exports = {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
};


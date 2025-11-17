import db from "../db.js";

export const getAllProductos = async () => {
  const [rows] = await db.query("SELECT * FROM productos");
  return rows;
};

export const getProductoById = async (id) => {
  const [rows] = await db.query("SELECT * FROM productos WHERE id = ?", [id]);
  return rows[0];
};

export const createProducto = async ({ nombre, descripcion, precio, cantidad }) => {
  const [result] = await db.query(
    "INSERT INTO productos (nombre, descripcion, precio, cantidad) VALUES (?, ?, ?, ?)",
    [nombre, descripcion, precio, cantidad]
  );
  return { id: result.insertId };
};

export const updateProducto = async (id, { nombre, descripcion, precio, cantidad }) => {
  await db.query(
    "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, cantidad = ? WHERE id = ?",
    [nombre, descripcion, precio, cantidad, id]
  );
};

export const deleteProducto = async (id) => {
  await db.query("DELETE FROM productos WHERE id = ?", [id]);
};

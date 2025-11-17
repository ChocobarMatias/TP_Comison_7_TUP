import { pool } from "../config/db.js";


export const getAllEntregas = async () => {
  const [rows] = await pool.query("SELECT * FROM entregas");
  return rows;
};

export const getEntregaById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM entregas WHERE id = ?", [id]);
  return rows[0];
};

export const createEntrega = async ({ producto_id, cantidad, fecha, destinatario }) => {
  const [result] = await pool.query(
    "INSERT INTO entregas (producto_id, cantidad, fecha, destinatario) VALUES (?, ?, ?, ?)",
    [producto_id, cantidad, fecha, destinatario]
  );
  return { id: result.insertId };
};

export const updateEntrega = async (id, { producto_id, cantidad, fecha, destinatario }) => {
  await pool.query(
    "UPDATE entregas SET producto_id = ?, cantidad = ?, fecha = ?, destinatario = ? WHERE id = ?",
    [producto_id, cantidad, fecha, destinatario, id]
  );
};

export const deleteEntrega = async (id) => {
  await pool.query("DELETE FROM entregas WHERE id = ?", [id]);
};

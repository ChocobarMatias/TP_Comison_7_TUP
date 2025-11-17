import { pool } from "../config/db.js";


export async function createAuditLog(accion, usuario) {
  await pool.promise().query(
    "INSERT INTO auditoria (accion, usuario) VALUES (?, ?)",
    [accion, usuario]
  );
}

export async function getAuditoria() {
  const [rows] = await pool.promise().query(
    "SELECT * FROM auditoria ORDER BY fecha DESC"
  );
  return rows;
}

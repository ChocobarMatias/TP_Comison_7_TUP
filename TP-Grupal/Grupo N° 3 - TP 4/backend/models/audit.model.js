import db from "../config/db.js";

export async function createAuditLog(accion, usuario) {
  await db.promise().query(
    "INSERT INTO auditoria (accion, usuario) VALUES (?, ?)",
    [accion, usuario]
  );
}

export async function getAuditoria() {
  const [rows] = await db.promise().query(
    "SELECT * FROM auditoria ORDER BY fecha DESC"
  );
  return rows;
}

import db from "../config/db.js";

export const createAuditLog = async (accion, usuario) => {
  await db.promise().query(
    "INSERT INTO audit (accion, usuario) VALUES (?, ?)",
    [accion, usuario]
  );
};

export const getAuditoria = async () => {
  const [rows] = await db.promise().query("SELECT * FROM audit ORDER BY fecha DESC");
  return rows;
};

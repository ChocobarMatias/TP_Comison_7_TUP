import { pool } from "../config/db.js";

export async function getUserByEmail(email) {
  const [rows] = await pool.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
  );
  return rows[0];
}

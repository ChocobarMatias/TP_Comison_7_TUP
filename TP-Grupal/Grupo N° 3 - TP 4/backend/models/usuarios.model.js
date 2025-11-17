import db from "../config/db.js";

export async function getUserByEmail(email) {
  const [rows] = await db.promise().query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
  );
  return rows[0];
}

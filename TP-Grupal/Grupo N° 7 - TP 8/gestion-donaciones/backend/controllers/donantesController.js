const { query, execute } = require("../utils/dbHelpers");

async function getDonantes(req, res) {
  try {
    const donantes = await query(
      "SELECT id, nombre, email, monto, activo FROM donantes ORDER BY id ASC"
    );
    return res.json(donantes);
  } catch (error) {
    console.error("Error al obtener donantes:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function getDonante(req, res) {
  try {
    const { id } = req.params;
    const donantes = await query(
      "SELECT id, nombre, email, monto, activo FROM donantes WHERE id = ?",
      [id]
    );

    if (donantes.length === 0) {
      return res.status(404).json({ message: "Donante no encontrado" });
    }

    return res.json(donantes[0]);
  } catch (error) {
    console.error("Error al obtener donante:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function createDonante(req, res) {
  const { nombre, email, monto, activo = true } = req.body;

  if (!nombre || !email || monto === undefined) {
    return res
      .status(400)
      .json({ message: "Nombre, email y monto son obligatorios" });
  }

  try {
    const result = await execute(
      "INSERT INTO donantes (nombre, email, monto, activo) VALUES (?, ?, ?, ?)",
      [nombre, email, monto, activo ? 1 : 0]
    );

    const donantes = await query(
      "SELECT id, nombre, email, monto, activo FROM donantes WHERE id = ?",
      [result.insertId]
    );

    return res.status(201).json(donantes[0]);
  } catch (error) {
    console.error("Error al crear donante:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function updateDonante(req, res) {
  const { id } = req.params;
  const { nombre, email, monto, activo } = req.body;

  try {
    const result = await execute(
      "UPDATE donantes SET nombre = ?, email = ?, monto = ?, activo = ? WHERE id = ?",
      [nombre, email, monto, activo ? 1 : 0, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Donante no encontrado" });
    }

    const donantes = await query(
      "SELECT id, nombre, email, monto, activo FROM donantes WHERE id = ?",
      [id]
    );

    return res.json(donantes[0]);
  } catch (error) {
    console.error("Error al actualizar donante:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function deleteDonante(req, res) {
  const { id } = req.params;

  try {
    const result = await execute("DELETE FROM donantes WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Donante no encontrado" });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("Error al eliminar donante:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

module.exports = {
  getDonantes,
  getDonante,
  createDonante,
  updateDonante,
  deleteDonante,
};


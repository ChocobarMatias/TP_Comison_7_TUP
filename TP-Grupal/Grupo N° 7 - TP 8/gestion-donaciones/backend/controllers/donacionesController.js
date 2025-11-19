const { query, execute } = require("../utils/dbHelpers");

async function getDonaciones(req, res) {
  try {
    const donaciones = await query(
      "SELECT id, nombre, monto, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, estado FROM donaciones ORDER BY fecha DESC"
    );
    return res.json(donaciones);
  } catch (error) {
    console.error("Error al obtener donaciones:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function getDonacion(req, res) {
  const { id } = req.params;

  try {
    const donaciones = await query(
      "SELECT id, nombre, monto, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, estado FROM donaciones WHERE id = ?",
      [id]
    );

    if (donaciones.length === 0) {
      return res.status(404).json({ message: "Donación no encontrada" });
    }

    return res.json(donaciones[0]);
  } catch (error) {
    console.error("Error al obtener donación:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function createDonacion(req, res) {
  const { nombre, monto, fecha, estado } = req.body;

  if (!nombre || monto === undefined || !fecha || !estado) {
    return res
      .status(400)
      .json({ message: "Nombre, monto, fecha y estado son obligatorios" });
  }

  try {
    const result = await execute(
      "INSERT INTO donaciones (nombre, monto, fecha, estado) VALUES (?, ?, ?, ?)",
      [nombre, monto, fecha, estado]
    );

    const donaciones = await query(
      "SELECT id, nombre, monto, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, estado FROM donaciones WHERE id = ?",
      [result.insertId]
    );

    return res.status(201).json(donaciones[0]);
  } catch (error) {
    console.error("Error al crear donación:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function updateDonacion(req, res) {
  const { id } = req.params;
  const { nombre, monto, fecha, estado } = req.body;

  try {
    const result = await execute(
      "UPDATE donaciones SET nombre = ?, monto = ?, fecha = ?, estado = ? WHERE id = ?",
      [nombre, monto, fecha, estado, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Donación no encontrada" });
    }

    const donaciones = await query(
      "SELECT id, nombre, monto, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, estado FROM donaciones WHERE id = ?",
      [id]
    );

    return res.json(donaciones[0]);
  } catch (error) {
    console.error("Error al actualizar donación:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function deleteDonacion(req, res) {
  const { id } = req.params;

  try {
    const result = await execute("DELETE FROM donaciones WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Donación no encontrada" });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("Error al eliminar donación:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

module.exports = {
  getDonaciones,
  getDonacion,
  createDonacion,
  updateDonacion,
  deleteDonacion,
};


const { query, execute } = require("../utils/dbHelpers");

function formatEntrega(row) {
  return {
    id: row.id,
    contenido: row.contenido,
    destino: row.destino,
    fechaSalida: row.fechaSalida,
    fechaLlegada: row.fechaLlegada,
    estado: row.estado,
  };
}

async function getEntregas(req, res) {
  try {
    const entregas = await query(
      `SELECT codigo AS id,
              contenido,
              destino,
              DATE_FORMAT(fecha_salida, '%Y-%m-%d') AS fechaSalida,
              DATE_FORMAT(fecha_llegada, '%Y-%m-%d') AS fechaLlegada,
              estado
       FROM entregas
       ORDER BY fecha_salida DESC, id DESC`
    );
    return res.json(entregas.map(formatEntrega));
  } catch (error) {
    console.error("Error al obtener entregas:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function getEntrega(req, res) {
  const { id } = req.params;

  try {
    const entregas = await query(
      `SELECT codigo AS id,
              contenido,
              destino,
              DATE_FORMAT(fecha_salida, '%Y-%m-%d') AS fechaSalida,
              DATE_FORMAT(fecha_llegada, '%Y-%m-%d') AS fechaLlegada,
              estado
       FROM entregas
       WHERE codigo = ?`,
      [id]
    );

    if (entregas.length === 0) {
      return res.status(404).json({ message: "Entrega no encontrada" });
    }

    return res.json(formatEntrega(entregas[0]));
  } catch (error) {
    console.error("Error al obtener entrega:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function createEntrega(req, res) {
  const { id: codigoBody, contenido, destino, fechaSalida, fechaLlegada = null, estado = "pendiente" } =
    req.body;

  if (!contenido || !destino || !fechaSalida) {
    return res.status(400).json({
      message: "Contenido, destino y fecha de salida son obligatorios",
    });
  }

  try {
    let codigo = codigoBody;

    if (!codigo) {
      const [lastEntrega] = await query(
        "SELECT codigo FROM entregas ORDER BY id DESC LIMIT 1"
      );

      const lastNumber = lastEntrega
        ? parseInt(lastEntrega.codigo.replace(/\D/g, ""), 10) || 0
        : 0;
      codigo = `D${String(lastNumber + 1).padStart(3, "0")}`;
    }

    await execute(
      `INSERT INTO entregas (codigo, contenido, destino, fecha_salida, fecha_llegada, estado)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [codigo, contenido, destino, fechaSalida, fechaLlegada, estado]
    );

    const entregas = await query(
      `SELECT codigo AS id,
              contenido,
              destino,
              DATE_FORMAT(fecha_salida, '%Y-%m-%d') AS fechaSalida,
              DATE_FORMAT(fecha_llegada, '%Y-%m-%d') AS fechaLlegada,
              estado
       FROM entregas
       WHERE codigo = ?`,
      [codigo]
    );

    return res.status(201).json(formatEntrega(entregas[0]));
  } catch (error) {
    if (error && error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "El código de entrega ya existe" });
    }
    console.error("Error al crear entrega:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function updateEntrega(req, res) {
  const { id } = req.params;
  const { contenido, destino, fechaSalida, fechaLlegada = null, estado } =
    req.body;

  try {
    const result = await execute(
      `UPDATE entregas
       SET contenido = ?, destino = ?, fecha_salida = ?, fecha_llegada = ?, estado = ?
       WHERE codigo = ?`,
      [contenido, destino, fechaSalida, fechaLlegada, estado, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Entrega no encontrada" });
    }

    const entregas = await query(
      `SELECT codigo AS id,
              contenido,
              destino,
              DATE_FORMAT(fecha_salida, '%Y-%m-%d') AS fechaSalida,
              DATE_FORMAT(fecha_llegada, '%Y-%m-%d') AS fechaLlegada,
              estado
       FROM entregas
       WHERE codigo = ?`,
      [id]
    );

    return res.json(formatEntrega(entregas[0]));
  } catch (error) {
    console.error("Error al actualizar entrega:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function deleteEntrega(req, res) {
  const { id } = req.params;

  try {
    const result = await execute("DELETE FROM entregas WHERE codigo = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Entrega no encontrada" });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("Error al eliminar entrega:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

module.exports = {
  getEntregas,
  getEntrega,
  createEntrega,
  updateEntrega,
  deleteEntrega,
};


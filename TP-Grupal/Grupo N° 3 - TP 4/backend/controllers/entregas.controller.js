import {
  getAllEntregas,
  getEntregaById,
  createEntrega,
  updateEntrega,
  deleteEntrega
} from "../models/entregas.model.js";

export const listEntregas = async (req, res) => {
  try {
    const rows = await getAllEntregas();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error listando entregas" });
  }
};

export const getEntrega = async (req, res) => {
  try {
    const { id } = req.params;
    const row = await getEntregaById(id);
    if (!row) return res.status(404).json({ error: "Entrega no encontrada" });
    res.json(row);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener entrega" });
  }
};

export const createNewEntrega = async (req, res) => {
  try {
    const { producto_id, cantidad, fecha, destinatario } = req.body;
    if (!producto_id || !cantidad) return res.status(400).json({ error: "producto_id y cantidad son requeridos" });
    const result = await createEntrega({ producto_id, cantidad, fecha: fecha || new Date(), destinatario: destinatario || null });
    const entrega = await getEntregaById(result.id);
    res.status(201).json(entrega);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creando entrega" });
  }
};

export const updateExistingEntrega = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    await updateEntrega(id, body);
    const entrega = await getEntregaById(id);
    res.json(entrega);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error actualizando entrega" });
  }
};

export const removeEntrega = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteEntrega(id);
    res.json({ mensaje: "Entrega eliminada" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error eliminando entrega" });
  }
};

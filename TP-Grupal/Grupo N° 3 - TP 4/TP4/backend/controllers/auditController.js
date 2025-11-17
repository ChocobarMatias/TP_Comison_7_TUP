import { getAuditoria } from "../models/audit.model.js";

export const obtenerAuditoria = async (req, res) => {
  res.json(await getAuditoria());
};

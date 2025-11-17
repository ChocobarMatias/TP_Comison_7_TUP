import { Router } from "express";
import { obtenerAuditoria } from "../controllers/auditController.js";

const router = Router();

router.get("/", obtenerAuditoria);

export default router;

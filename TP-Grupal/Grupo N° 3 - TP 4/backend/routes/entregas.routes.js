import { Router } from "express";
import {
  listEntregas,
  getEntrega,
  createNewEntrega,
  updateExistingEntrega,
  removeEntrega
} from "../controllers/entregas.controller.js";

const router = Router();

router.get("/", listEntregas);
router.get("/:id", getEntrega);
router.post("/", createNewEntrega);
router.put("/:id", updateExistingEntrega);
router.delete("/:id", removeEntrega);

export default router;

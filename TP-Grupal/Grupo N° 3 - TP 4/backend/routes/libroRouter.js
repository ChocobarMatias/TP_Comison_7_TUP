import { Router } from "express";
import {
  obtenerLibros,
  obtenerLibro,
  crearLibro,
  editarLibro,
  eliminarLibro,
} from "../controllers/librosController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, obtenerLibros);
router.get("/:id", authMiddleware, obtenerLibro);
router.post("/", authMiddleware, crearLibro);
router.put("/:id", authMiddleware, editarLibro);
router.delete("/:id", authMiddleware, eliminarLibro);

export default router;

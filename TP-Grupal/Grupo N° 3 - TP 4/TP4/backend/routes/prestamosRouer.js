import { Router } from "express";
import {
  obtenerPrestamos,
  crearPrestamo,
  eliminarPrestamo,
} from "../controllers/prestamosController.js";

const router = Router();

router.get("/", obtenerPrestamos);
router.post("/", crearPrestamo);
router.delete("/:id", eliminarPrestamo);

export default router;

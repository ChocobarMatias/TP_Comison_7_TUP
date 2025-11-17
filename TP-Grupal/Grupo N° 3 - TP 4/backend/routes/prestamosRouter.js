import { Router } from "express";
import {
  obtenerPrestamos,
  crearPrestamo,
  eliminarPrestamo,
} from "../controllers/prestamoController.js";

const router = Router();

router.get("/", obtenerPrestamos);
router.post("/", crearPrestamo);
router.delete("/:id", eliminarPrestamo);

export default router;

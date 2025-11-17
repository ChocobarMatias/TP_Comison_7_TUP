import { Router } from "express";
import {
  obtenerAlumnos,
  obtenerAlumno,
  crearAlumno,
  editarAlumno,
  eliminarAlumno,
} from "../controllers/alumnosController.js";

const router = Router();

router.get("/", obtenerAlumnos);
router.get("/:id", obtenerAlumno);
router.post("/", crearAlumno);
router.put("/:id", editarAlumno);
router.delete("/:id", eliminarAlumno);

export default router;

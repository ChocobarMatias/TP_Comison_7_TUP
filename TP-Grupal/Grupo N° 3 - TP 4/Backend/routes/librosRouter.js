import { Router } from "express";
import {
  obtenerLibros,
  obtenerLibro,
  crearLibro,
  editarLibro,
  eliminarLibro,
} from "../controllers/librosController.js";


const router = Router();

router.get("/",  obtenerLibros);
router.get("/:id",  obtenerLibro);
router.post("/",  crearLibro);
router.put("/:id", editarLibro);
router.delete("/:id",  eliminarLibro);

export default router;

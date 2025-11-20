import express from "express";
import { obtenerTodosLosTurnos, eliminarTurnos, crearTurnos, modificarCita } from "../controllers/citasControllers.js";

const router = express.Router()

router.get("/", obtenerTodosLosTurnos);

router.delete("/:id", eliminarTurnos)

router.post("/", crearTurnos)

// PUT 
router.put("/:id", modificarCita);


export default router
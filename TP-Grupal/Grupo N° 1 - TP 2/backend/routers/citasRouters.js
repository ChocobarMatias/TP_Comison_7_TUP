import express from "express";
import { obtenerTodosLosTurnos, eliminarTurnos, crearTurnos } from "../controllers/citasControllers.js";

const router = express.Router()

router.get("/", obtenerTodosLosTurnos);

router.delete("/:id", eliminarTurnos)

router.post("/", crearTurnos)
export default router
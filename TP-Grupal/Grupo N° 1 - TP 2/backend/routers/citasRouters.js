import express from "express";
import { obtenerTodosLosTurnos, eliminarTurnos } from "../controllers/citasControllers.js";

const router = express.Router()

router.get("/", obtenerTodosLosTurnos);

router.delete("/:id", eliminarTurnos)
export default router
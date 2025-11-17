import { Router } from "express";
import { login, create, list } from "../controllers/usuarios.controller.js";

const router = Router();

// Auth
router.post("/login", login);

// CRUD usuarios (pueden ser usados por admin)
router.get("/", list);
router.post("/", create);

export default router;

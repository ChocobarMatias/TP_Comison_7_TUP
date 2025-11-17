import { Router } from "express";
import { login } from "../controllers/usuariosController.js";

const router = Router();

router.post("/login", login);

export default router;

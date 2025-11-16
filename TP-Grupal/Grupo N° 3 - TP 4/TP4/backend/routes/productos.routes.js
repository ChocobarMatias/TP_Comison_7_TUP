import { Router } from "express";
import {
  listProductos,
  getProducto,
  createNewProducto,
  updateExistingProducto,
  removeProducto
} from "../controllers/productos.controller.js";

const router = Router();

router.get("/", listProductos);
router.get("/:id", getProducto);
router.post("/", createNewProducto);
router.put("/:id", updateExistingProducto);
router.delete("/:id", removeProducto);

export default router;

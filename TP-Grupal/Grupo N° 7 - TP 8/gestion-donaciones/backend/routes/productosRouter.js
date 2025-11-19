const express = require("express");
const {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
} = require("../controllers/productosController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", getProductos);
router.get("/:id", getProducto);
router.post("/", createProducto);
router.put("/:id", updateProducto);
router.delete("/:id", deleteProducto);

module.exports = router;


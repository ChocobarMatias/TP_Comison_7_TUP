const express = require("express");
const {
  getEntregas,
  getEntrega,
  createEntrega,
  updateEntrega,
  deleteEntrega,
} = require("../controllers/entregasController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", getEntregas);
router.get("/:id", getEntrega);
router.post("/", createEntrega);
router.put("/:id", updateEntrega);
router.delete("/:id", deleteEntrega);

module.exports = router;


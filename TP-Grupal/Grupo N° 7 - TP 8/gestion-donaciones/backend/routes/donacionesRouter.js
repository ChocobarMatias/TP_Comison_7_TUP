const express = require("express");
const {
  getDonaciones,
  getDonacion,
  createDonacion,
  updateDonacion,
  deleteDonacion,
} = require("../controllers/donacionesController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", getDonaciones);
router.get("/:id", getDonacion);
router.post("/", createDonacion);
router.put("/:id", updateDonacion);
router.delete("/:id", deleteDonacion);

module.exports = router;


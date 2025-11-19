const express = require("express");
const {
  getDonantes,
  getDonante,
  createDonante,
  updateDonante,
  deleteDonante,
} = require("../controllers/donantesController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", getDonantes);
router.get("/:id", getDonante);
router.post("/", createDonante);
router.put("/:id", updateDonante);
router.delete("/:id", deleteDonante);

module.exports = router;


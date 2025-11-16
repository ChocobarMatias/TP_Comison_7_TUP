const express = require("express");
const { login, profile } = require("../controllers/authController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);
router.get("/profile", authMiddleware, profile);

module.exports = router;


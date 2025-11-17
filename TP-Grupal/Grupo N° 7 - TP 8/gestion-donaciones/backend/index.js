const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

const { pool } = require("./config/db");
const authRouter = require("./routes/authRouter");
const donantesRouter = require("./routes/donantesRouter");
const donacionesRouter = require("./routes/donacionesRouter");
const productosRouter = require("./routes/productosRouter");
const entregasRouter = require("./routes/entregasRouter");

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    return res.json({ status: "ok" });
  } catch (error) {
    return res.status(500).json({ status: "error", details: error.message });
  }
});

app.use("/api/auth", authRouter);
app.use("/api/donantes", donantesRouter);
app.use("/api/donaciones", donacionesRouter);
app.use("/api/productos", productosRouter);
app.use("/api/entregas", entregasRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.use((error, req, res, next) => {
  console.error("Error inesperado:", error);
  res.status(500).json({ message: "Error interno del servidor" });
});

const PORT = process.env.PORT || 3001;

pool
  .getConnection()
  .then((connection) => {
    connection.release();
    app.listen(PORT, () => {
      console.log(`Servidor listo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
    process.exit(1);
  });


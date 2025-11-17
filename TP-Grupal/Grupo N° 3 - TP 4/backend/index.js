import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import pool from "./db.js"; // para verificar la DB al arrancar

import usuariosRoutes from "./routes/usuarios.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import entregasRoutes from "./routes/entregas.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/entregas", entregasRoutes);

// Health check
app.get("/api/health", (req, res) => res.json({ ok: true }));

// Levantar servidor tras verificar DB
const start = async () => {
  try {
    // simple query para validar conexión
    await pool.query("SELECT 1");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log("Base de datos conectada exitosamente");
    });
  } catch (err) {
    console.error("Error conectando a la base de datos:", err);
    process.exit(1);
  }
};

start();

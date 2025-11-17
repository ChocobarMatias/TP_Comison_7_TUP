import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import usuariosRouter from "./routers/usuariosRouter.js";
import alumnosRouter from "./routers/alumnosRouter.js";
import librosRouter from "./routers/librosRouter.js";
import prestamosRouter from "./routers/prestamosRouter.js";
import auditRouter from "./routers/auditRouter.js";

import db from "./config/db.js";

dotenv.config();

const app = express();

// Middlewares globales
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// Rutas reales
app.use("/api/auth", usuariosRouter);
app.use("/api/alumnos", alumnosRouter);
app.use("/api/libros", librosRouter);
app.use("/api/prestamos", prestamosRouter);
app.use("/api/audit", auditRouter);

const PORT = process.env.PORT || 3001;

// Levantar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

// Conexión DB
db.connect((err) => {
  if (err) {
    console.log("❌ Error al conectar la base de datos:", err);
  } else {
    console.log("✅ Base de datos conectada exitosamente");
  }
});

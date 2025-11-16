import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routers/usuariosRouter.js";
import db from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

db.connect((err) => {
  if (err) {
    console.log("❌ Error al conectar la base de datos:", err);
  } else {
    console.log("✅ Base de datos conectada exitosamente");
  }
});

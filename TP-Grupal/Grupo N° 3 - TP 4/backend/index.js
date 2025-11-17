import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/usuariosRouter.js";
import librosRouter from "./routes/librosRouter.js";
import alumnosRouter from "./routes/alumnosRouter.js";
import auditRouter from "./routes/auditRouter.js";
import prestamosRouter from "./routes/prestamosRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// 🔐 Login
app.use("/api/auth", authRoutes);

// 👨‍🎓 Students
app.use("/api/alumnos", alumnosRouter);

// 📚 Books
app.use("/api/libros", librosRouter);

// 📄 Loans
app.use("/api/prestamos", prestamosRouter);

// 📝 Audit
app.use("/api/audit", auditRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API OK en http://localhost:${PORT}`));

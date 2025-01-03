import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js"; // Asegúrate del nombre del archivo
import authRouter from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

// Conecta a la base de datos
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true })); // Permitir cualquier origen

// API Endpoints
app.get('/', (req, res) => res.send("API working"));
app.use('/api/auth', authRouter);

app.listen(port, () => console.log(`Server started on PORT:${port}`));

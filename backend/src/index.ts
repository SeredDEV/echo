import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./modules/products/routes/product.routes";
import authRoutes from "./modules/auth/routes/auth.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Echo Backend API - Supabase" });
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

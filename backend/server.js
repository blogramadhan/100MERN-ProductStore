import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Mengaktifkan CORS untuk semua route
app.use(express.json()); // Untuk mem-parse body dari request

// Routes
app.use("/api/products", productRoutes);

// Endpoint untuk pengecekan kesehatan server
app.get("/", (req, res) => {
  res.json({ message: "Product Store API is running!" });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
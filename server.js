import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import formRoutes from "./routes/formRoutes.js";

// Initialize app
const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

// Connect to MongoDB
connectDB();

// API routes
app.use("/api/form", formRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("🌐 API is working!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});

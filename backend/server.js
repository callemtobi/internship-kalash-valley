import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import bookRoutes from "./routes/booking.js";

mongoose.connect(process.env.MONGODB_URI); // Add name
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:"),
);
mongoose.connection.once("open", () => {
  console.log("-----> Database connected");
});
// import connectDB from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 8000;

// import authRoutes from "./routes/";
// import caseRoutes from "./routes/cases.js";
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
};

// Middleware - CORS MUST come before routes
app.use(cors(corsOptions)); // for cross-origin requests/frontend-backend communication
app.use(express.static("./public"));
// app.use("/uploads", express.static("./uploads")); // Serve uploaded files
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/bookings", bookRoutes);
app.post("/api/form", (req, res) => {
  res.send("Success");
});
// app.post("/booking", (req, res) => {
//   const data = req.body;
//   console.log("Received booking data:", data);
//   res.json({
//     success: true,
//     message: "Welcome to the Booking API",
//     data,
//   });
// });

// app.get("/get", (req, res) => {
//   res.json({
//     success: true,
//     message: "GET request received at /get endpoint",
//   });
// });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});
// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});

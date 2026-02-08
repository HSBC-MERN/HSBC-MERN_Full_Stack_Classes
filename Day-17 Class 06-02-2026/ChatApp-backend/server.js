const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoute");
const authRoutes = require("./routes/authRoutes");

dotenv.config(); 
connectDB();     

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", chatRoutes);
app.use("/api/auth", authRoutes);

// Health check (optional but recommended)
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

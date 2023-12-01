// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConnection");
const itemRoutes = require("./routes/item.route");
const authRoutes = require("./routes/auth.route");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Home endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Routes
app.use("/api/items", itemRoutes);
app.use("/api/auth", authRoutes);

// Start the server
const PORT = 4200;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

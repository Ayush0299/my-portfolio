
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use(express.json());

// Contact API
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running!");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  });

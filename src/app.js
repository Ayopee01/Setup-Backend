const express = require("express");
const cors = require("cors");
const setupSwagger = require("./docs/swagger");
// Import routes
const systemRoutes = require("./routes/system.routes");

const app = express();

// Setup middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

// Setup routes
app.use("/", systemRoutes);

// Setup Swagger documentation
setupSwagger(app);

module.exports = app;

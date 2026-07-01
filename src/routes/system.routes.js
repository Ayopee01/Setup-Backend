const express = require("express");

const router = express.Router();

/**
 * @openapi
 * /:
 *   get:
 *     tags:
 *       - System
 *     summary: Check that the API is running.
 *     responses:
 *       200:
 *         description: API status.
 */
router.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
    docs: "/api-docs",
    health: "/health",
  });
});

/**
 * @openapi
 * /health:
 *   get:
 *     tags:
 *       - System
 *     summary: Health check endpoint.
 *     responses:
 *       200:
 *         description: Service health status.
 */
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;

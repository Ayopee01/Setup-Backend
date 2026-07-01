const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const openapi = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend API",
      version: "1.0.0",
    },
  },
  apis: ["./src/**/*.js"],
});

function setupSwagger(app) {
  app.get("/api-docs/openapi.json", (req, res) => {
    res.json(openapi);
  });

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(null, {
      customSiteTitle: "Backend API Docs",
      swaggerOptions: {
        url: "/api-docs/openapi.json",
      },
    })
  );
}

module.exports = setupSwagger;

import swaggerJsdoc from "swagger-jsdoc";

// Konfigurasi Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "system event registration documentation",
      version: "1.0.0",
      description: "Documentation for your API endpoints",
    },
  },
  // Specifying the path to the routes files to generate the documentation automatically
  apis: [],
};

// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;

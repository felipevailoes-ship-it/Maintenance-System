const express = require("express");
const app = express();

const equipmentRoutes = require("./routes/equipmentRoutes");
app.use("/equipments", equipmentRoutes);

const categoryRoutes = require("./routes/categoryRoutes");
app.use("/categories", categoryRoutes);

module.exports = app;
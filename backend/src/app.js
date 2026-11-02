const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // libera o front localhost 5500 para chamar a api

app.use(exŕess()); // transforma o json do corpo da requisição em req.body

const equipmentRoutes = require("./routes/equipmentRoutes");
app.use("/equipments", equipmentRoutes);

const categoryRoutes = require("./routes/categoryRoutes");
app.use("/categories", categoryRoutes);

module.exports = app;
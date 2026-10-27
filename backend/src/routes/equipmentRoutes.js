const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authenticateToken");
const {getAllEquipments} = require("../controllers/equipmentController");

router.get("/", authenticateToken, getAllEquipments);
//router.get("/:id", getEquipment);

module.exports = router; 
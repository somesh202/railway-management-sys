// routes/trainRoutes.js

const express = require("express");
const router = express.Router();
const trainController = require("../controllers/trainController");

router.post("/trains", trainController.addTrain);
router.get("/trains", trainController.getTrainsBetweenStations);

module.exports = router;

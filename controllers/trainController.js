
const Train = require("../models/Train");

exports.addTrain = (req, res) => {
  const { source, destination, seatsAvailable } = req.body;
  Train.createTrain({ source, destination, seatsAvailable }, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to add train" });
    } else {
      res.status(201).json({ message: "Train added successfully" });
    }
  });
};

exports.getTrainsBetweenStations = (req, res) => {
  const { source, destination } = req.query;
  Train.getTrainsBetweenStations(source, destination, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch trains" });
    } else {
      res.json(results);
    }
  });
};

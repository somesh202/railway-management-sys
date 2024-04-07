
const connection = require("../config/dbConfig");

const Train = {
  createTrain: function (trainData, callback) {
    const { source, destination, seatsAvailable } = trainData;
    connection.query(
      "INSERT INTO trains (source, destination, seats_available) VALUES (?, ?, ?)",
      [source, destination, seatsAvailable],
      callback
    );
  },

  getTrainsBetweenStations: function (source, destination, callback) {
    connection.query(
      "SELECT * FROM trains WHERE source = ? AND destination = ?",
      [source, destination],
      callback
    );
  },
};

module.exports = Train;

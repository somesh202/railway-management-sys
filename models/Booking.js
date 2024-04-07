// models/Booking.js

const connection = require("../config/dbConfig");

const Booking = {
  bookSeat: function (bookingData) {
    const { userId, trainId } = bookingData;
    connection.query(
      "INSERT INTO bookings (user_id, train_id) VALUES (?, ?)",
      [userId, trainId],
      function(error, results) {
        if (error) {
          // Handle the error
          console.log(error);
        } else {
          // Process the results
          console.log(results.json())
        }
      }
    );
  },

  getBookingDetails: function (bookingId, callback) {
    connection.query(
      "SELECT * FROM bookings WHERE id = ?",
      [bookingId],
      callback
    );
  },
};

module.exports = Booking;

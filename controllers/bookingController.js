
const Booking = require("../models/Booking");

exports.bookSeat = (req, res) => {
  const { userId, trainId } = req.body;
  Booking.bookSeat({ userId, trainId }, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to book seat" });
    } else {
      res.status(201).json({ message: "Seat booked successfully" });
    }
  });
};

exports.getBookingDetails = (req, res) => {
  const { bookingId } = req.params;
  Booking.getBookingDetails(bookingId, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch booking details" });
    } else {
      res.json(results);
    }
  });
};

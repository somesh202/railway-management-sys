// routes/bookingRoutes.js

const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/bookings", bookingController.bookSeat);
router.get("/bookings/:bookingId", bookingController.getBookingDetails);

module.exports = router;

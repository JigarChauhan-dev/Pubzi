let express = require("express");
const {
  Authenticate,
  Authorize,
} = require("../../middlewares/auth.middleware");
const { fetchAllBookings,cancelBooking, updateBookingStatus } = require("../../controllers/booking.controller");

let router = express.Router();

router.get("/allbookings", Authenticate, Authorize("admin"), fetchAllBookings);
router.delete("/cancel/:id",Authenticate,Authorize("admin"),cancelBooking);
router.put("/status/:id",Authenticate,Authorize("admin"),updateBookingStatus);

module.exports = router;

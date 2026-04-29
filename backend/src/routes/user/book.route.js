let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middleware");
const { createBooking, getBooking } = require("../../controllers/booking.controller");
let router = express.Router();

router.get("/all",Authenticate,Authorize("user"),getBooking);
router.post("/submit",Authenticate,Authorize("user"),createBooking);

module.exports = router;
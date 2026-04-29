const express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middleware");
const { addSeat, fetchSeats, editSeat, deleteSeat } = require("../../controllers/seat.controller");
const router = express.Router();

router.post("/addseat",Authenticate,Authorize("admin"),addSeat);
router.get("/allseats",Authenticate,Authorize("admin"),fetchSeats);
router.put("/editseats/:id",Authenticate,Authorize("admin"),editSeat);
router.delete("/deleteseat/:id",Authenticate,Authorize("admin"),deleteSeat);

module.exports = router;
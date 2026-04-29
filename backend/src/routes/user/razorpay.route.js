const express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middleware");
const { createOrder } = require("../../controllers/razorpay.controller");
const router = express.Router();

router.post("/createorder",Authenticate,Authorize("user"),createOrder);

module.exports = router;
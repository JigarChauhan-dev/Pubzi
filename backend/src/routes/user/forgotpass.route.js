const express = require("express");
const forgetpassword = require("../../controllers/forgetpass.controller");
const resestPassword = require("../../controllers/resetpas.controller");
const router = express.Router();

router.post("/forgotpassword",forgetpassword);
router.post("/reset-password", resestPassword);

module.exports = router;
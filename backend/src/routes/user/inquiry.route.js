let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middleware");
const { addInquiry } = require("../../controllers/inquiries.controller");
let router = express.Router();

router.post("/submit",Authenticate,Authorize("user"),addInquiry);

module.exports = router;
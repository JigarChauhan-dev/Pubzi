const express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middleware");
const { fetchInquiry, removeInquiry } = require("../../controllers/inquiries.controller");
const router = express.Router();

router.get("/allinquiries",Authenticate,Authorize("admin"),fetchInquiry);
router.delete("/delete/:id",Authenticate,Authorize("admin"),removeInquiry);

module.exports = router;
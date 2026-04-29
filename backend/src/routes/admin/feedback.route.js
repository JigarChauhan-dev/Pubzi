const express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middleware");
const { fetchFeedbacks, deleteFeedback } = require("../../controllers/feedback.controller");
const router = express.Router();

router.get("/allfeedbacks",Authenticate,Authorize("admin"),fetchFeedbacks)
router.delete("/delete/:id",Authenticate,Authorize("admin"),deleteFeedback);

module.exports = router;
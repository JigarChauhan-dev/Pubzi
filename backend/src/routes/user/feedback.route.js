let express = require("express");
const { addFeedback, fetchFeedbacks } = require("../../controllers/feedback.controller");
let router = express.Router();

router.post("/submit",addFeedback);
router.get("/getfeedback",fetchFeedbacks);

module.exports = router;
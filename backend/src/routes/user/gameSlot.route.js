let express = require("express");
const { fetchGameSlotById } = require("../../controllers/gameslot.controller");

let router = express.Router();
router.get("/:id", fetchGameSlotById);

module.exports = router;

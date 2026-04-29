let express = require("express");
const { fetchGameSlotById } = require("../../controllers/gameSlot.controller");

let router = express.Router();

router.get("/:id", fetchGameSlotById);

module.exports = router;

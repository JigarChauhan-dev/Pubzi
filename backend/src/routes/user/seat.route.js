let express = require("express");
const { fetchSeatById } = require("../../controllers/seat.controller");


let router = express.Router();

router.get("/:id", fetchSeatById);

module.exports = router;
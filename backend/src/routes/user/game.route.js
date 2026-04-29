let express = require("express");
const { fetchgame, fetchGameById } = require("../../controllers/game.controller");
let router = express.Router();

router.get("/allgame",fetchgame);
router.get("/:id", fetchGameById);

module.exports = router;
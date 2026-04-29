const express = require("express");
const {
  Authenticate,
  Authorize,
} = require("../../middlewares/auth.middleware");
const {
  addGameSlot,
  fetchGameSlots,
  editGameSlot,
  deleteGameSlot,
} = require("../../controllers/gameslot.controller");

const router = express.Router();

router.post("/addgameslot", Authenticate, Authorize("admin"), addGameSlot);
router.get("/allslots", Authenticate, Authorize("admin"), fetchGameSlots);
router.put("/editslot/:id", Authenticate, Authorize("admin"), editGameSlot);
router.delete(
  "/deleteslot/:id",
  Authenticate,
  Authorize("admin"),
  deleteGameSlot,
);

module.exports = router;

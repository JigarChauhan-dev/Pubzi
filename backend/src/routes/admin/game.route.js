const express = require("express");
const router = express.Router();
const {
  AddGame,
  fetchgame,
  editgame,
  deletegame,
} = require("../../controllers/game.controller");
const {
  Authenticate,
  Authorize,
} = require("../../middlewares/auth.middleware");
const upload = require("../../middlewares/multer.middleware");

router.post(
  "/addgame",
  Authenticate,
  Authorize("admin"),
  upload.single("image"),
  AddGame,
);

router.get("/allgames", Authenticate, Authorize("admin"), fetchgame);

router.put(
  "/editgame/:id",
  Authenticate,
  Authorize("admin"),
  upload.single("image"),
  editgame,
);

router.delete("/deletegame/:id", Authenticate, Authorize("admin"), deletegame);

module.exports = router;

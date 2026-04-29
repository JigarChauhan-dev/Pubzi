const express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middleware");
const { fetchAllUsers, removeUser, toggleUserStatus } = require("../../controllers/users.controller");
const router = express.Router();

router.get("/allusers",Authenticate,Authorize("admin"),fetchAllUsers);
router.put("/status/:id",Authenticate,Authorize("admin"),toggleUserStatus);

module.exports = router;
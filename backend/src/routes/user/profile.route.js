let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middleware");
const { default: Profile } = require("../../controllers/profile.controller");
const { updateUser } = require("../../controllers/users.controller");
let router = express.Router();

router.get("/profile",Authenticate,Authorize("user"),Profile);
router.put("/update/:id",Authenticate,Authorize("user"),updateUser)

module.exports = router;
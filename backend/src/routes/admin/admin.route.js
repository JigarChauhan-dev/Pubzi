let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middleware");
const { dashboard } = require("../../controllers/admin.controller");
let router = express.Router();

router.get("/dashboard",Authenticate,Authorize("admin"),dashboard);

module.exports = router;
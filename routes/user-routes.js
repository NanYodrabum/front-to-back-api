const express = require("express");
const router = express.Router();
//import controller
const userControllers = require("../controllers/user-controllers");
//import middleware
const { authCheck } = require("../middlewears/auth-middleware");


//  @ENDPOINT http://localhost:8003/api/users
router.get("/users", authCheck, userControllers.listUsers);
router.patch("/user/update-role", authCheck, userControllers.updateRole);
router.delete("/user/:id", authCheck, userControllers.deleteUsers);
module.exports = router;

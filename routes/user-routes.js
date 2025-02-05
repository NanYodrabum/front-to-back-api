const express = require("express")
const router = express.Router()
const userControllers = require("../controllers/user-controllers")

router.get("/users", userControllers.listUsers)
router.patch("/user/update-role", userControllers.updateRole)
router.delete("/user/:id", userControllers.deleteUsers)
module.exports = router
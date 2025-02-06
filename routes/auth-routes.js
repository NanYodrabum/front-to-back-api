const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");
const {authCheck} = require("../middlewears/auth-middleware")
const { validateWithZod, registerSchema, loginSchema } = require("../middlewears/validator");

// @ENDPOINT http://localhost:8003/api/register
router.post(
  "/register",
  validateWithZod(registerSchema),
  authControllers.register
);
router.post("/login", validateWithZod(loginSchema),authControllers.login);

router.get("/current-user", authCheck, authControllers.currentUser)

//export
module.exports = router;

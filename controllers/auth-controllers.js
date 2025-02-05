const prisma = require("../configs/prisma");
const createError = require("../utils/createError");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  try {
    //code
    //Step 1 req.body
    const { email, firstname, lastname, password, confirmPassword } = req.body;
    //Step 2 validate
    //Step 3 Check already
    const checkEmail = await prisma.profile.findFirst({
      where: {
        email: email,
      },
    });
    console.log(checkEmail);
    if (checkEmail) {
      return createError(400, "Email is already exists!!!");
    }
    //Step 4 Encrypt bcrypt
    // const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(hashedPassword);
    //Step 5 Insert to DB
    const profile = await prisma.profile.create({
      data: {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: hashedPassword,
      },
    });
    //Step 6 Response
    res.json({ message: "Hello register" });
  } catch (error) {
    console.log("Step 2 Catch");
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    res.json({ message: "Hello Login" });
  } catch (error) {
    next(error);
  }
};

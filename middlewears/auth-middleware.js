const createError = require("../utils/createError");
const jwt = require("jsonwebtoken");

exports.authCheck = async (req, res, next) => {
  try {
    //รับ header จาก client
    const authorization = req.headers.authorization;
    // Check ถ้าไม่มี token
    console.log(authorization);
    if (!authorization) return createError(400, "Missing Token!!!!");
    // bearer token.... แบ่งด้วยช่องว่างง
    const token = authorization.split(" ")[1];

    //Verify Token
    jwt.verify(token, process.env.SECRET, (err, decode) => {
      console.log(err);
      console.log(decode);
      if (err) {
        return createError(400, "Unauthorized !!");
      }
      //สร้าง property user = decode (ข้อมูล user จาก token)
      req.user = decode;
      next();
    });
  } catch (error) {
    next(error);
  }
};

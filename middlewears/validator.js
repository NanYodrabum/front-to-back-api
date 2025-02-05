const { z } = require("zod");
//npm i zod
//Test validator
exports.registerSchema = z
  .object({
    email: z.string().email("Email is not correct"),
    firstname: z.string().min(3, "Firstname should be more than 3 characters"),
    lastname: z.string().min(3, "Lastname should be more than 3 characters"),
    password: z.string().min(6, "Password should be more than 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "ConfirmPassword should be more than 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm Password is not the same",
    path: ["confirmPassword"],
  });

exports.loginSchema = z.object({
  email: z.string().email("Email is not correct"),
  password: z.string().min(6, "Password should be more than 6 characters"),
});

exports.validateWithZod = (schema) => (req, res, next) => {
  try {
    console.log("Hello middlewear");
    schema.parse(req.body);
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item.message);
    const errTxt = errMsg.join(",");
    const mergeError = new Error(errTxt);
    next(mergeError);
  }
};

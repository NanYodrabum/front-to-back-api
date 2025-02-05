exports.register = async (req, res, next) => {
  try {
    //code
    //Step 1 req.body
    console.log(req.body);
    //Step 2 validate
    //Step 3 Check already
    //Step 4 Encrypt bcrypt
    //Step 5 Insert to DB
    //Step 6 Response
    res.json({ message: "Hello register" });
  } catch (error) {
    next(error)
  }
};

exports.login = async (req, res, next) => {
  try {
    res.json({ message: "Hello Login" });
  } catch (error) {
    next(error)
  }
}

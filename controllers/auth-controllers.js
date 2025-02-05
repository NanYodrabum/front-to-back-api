exports.register = async (req, res, next) => {
  try {
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

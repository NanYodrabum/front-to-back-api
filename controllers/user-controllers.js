//1.List all users
//2.Update Role
//3.Delete User

exports.listUsers = async (req, res, next) => {
  try {
    res.json({ message: "Hello, List Users " });
  } catch (error) {
    next(error);
  }
};
exports.updateRole = async (req, res, next) => {
  try {
    res.json({ message: "Hello, Update Role " });
  } catch (error) {
    next(error);
  }
};
exports.deleteUsers = async (req, res, next) => {
  try {
    res.json({ message: "Hello, Delete User " });
  } catch (error) {
    next(error);
  }
};

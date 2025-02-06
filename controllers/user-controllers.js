const prisma = require("../configs/prisma");
//1.List all users
//2.Update Role
//3.Delete User

exports.listUsers = async (req, res, next) => {
  try {
    const users = await prisma.profile.findMany({
      // omit คือคำสั่งที่ไม่เอาข้อมูล column นั้นๆ
      omit: {
        password: true,
      },
    });
    // console.log(users);
    res.json({ result: users });
  } catch (error) {
    next(error);
  }
};
exports.updateRole = async (req, res, next) => {
  try {
    const { id, role } = req.body;
    console.log(id, role);
    const updated = await prisma.profile.update({
      where: { id: Number(id) },
      data: { role: role },
    });

    res.json({ message: "Update Role Success" });
  } catch (error) {
    next(error);
  }
};
exports.deleteUsers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.profile.delete({
      where: { id: Number(id) },
    });
    console.log(id);
    res.json({ message: "Delete Success" });
  } catch (error) {
    next(error);
  }
};

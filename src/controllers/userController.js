const prisma = require("../utils/prismaUtil");
const bcrypt = require("../utils/bcrypt");
const {
  signUp,
  getUsers,
  getUserById,
  editUser,
  removeUser,
  login,
} = require("../helpers/user");

exports.addUser = async (req, res, next) => {
  try {
    const data = req.body;
    data.password = bcrypt.hash(data.password);
    const user = await signUp(data);
    delete user.password;
    res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    console.log(error);
  }
};

exports.Users = async(req,res,next)=>{
  try{

  }catch(error){
    console.log(error);
  }
}

// module.exports = {
//   addUser,
// };

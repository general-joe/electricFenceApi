const prisma = require("../utils/prismaUtil");
const bcrypt = require("../utils/bcrypt");
const httpstatus = require("../utils/httpStatusCode")
const { signToken } = require("../utils/tokenUtil");

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
    res.status(httpstatus.CREATED).json({ message: "user created successfully" });
  } catch (error) {
    console.log(error);
    next(new CustomError(500, error));
  }
};

exports.listUsers = async(req,res,next)=>{
  try{
    const users = await getUsers();
    res.status(httpstatus.OK).json({users})
  }catch(error){
    console.log(error);
    next(new CustomError(500, error));
  }
}

exports.findUserbyId = async(req,res,next)=>{
  try{
    const {id} = req.params
  const user = await getUserById(id);
  res.status(httpstatus.OK).json({user})

  }catch(error){
    console.log(error)
    next(new CustomError(500, error));
  }
};

exports.updateUser = async(req,res,next)=>{
  try{
    const id = req.params
    const data = req.body
    const update = await editUser(id, data)
    res.status(httpstatus.OK).json({update})

  }catch(error){
    console.log(error)
    next(new CustomError(500, error));
  }
};

exports.deleteUser = async(req,res,next)=>{
  try{
    const id = req.params
    const deleteUser = await removeUser(id)
    res.status(httpstatus.OK).json({message: "user removed successfully"})
  }catch(error){
    console.log(error)
    next(new CustomeError(500, error));
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const client = await login(email);
    if (!client) {
      throw new Error("email not found");
    } else {
      const checkPassword = await bcrypt.compare(password, client.password);

      if (!checkPassword) {
        throw new Error("Invalid credentials");
      } else {
        delete client.password;
        const token = signToken(client.id);
        res.status(httpstatus.OK).json({
          message: "User succesfully logged in !",
          username: client.username,
          email: client.email,
          token,
          id: client.id,
          role: client.role,
        });
      }
    }
  } catch (error) {
    console.log(error)
    next(new CustomError(500, error));
  }
};


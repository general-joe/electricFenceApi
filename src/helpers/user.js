const prisma = require("../utils/prismaUtil");

const signUp = async (data) => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

const getUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

const editUser = async (id, data) => {
  const user = await prisma.user.update({
    where: { id },
    data,
  });
  return user;
};

const removeUser = async (id) => {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
};

const login = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      role: true,
      id: true,
      email: true,
      password: true,
    },
  });
  return user;
};

module.exports = {
  signUp,
  getUsers,
  getUserById,
  editUser,
  removeUser,
  login,
};

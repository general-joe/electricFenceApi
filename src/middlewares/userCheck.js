const prisma = require("../utils/prismaUtil");
const httpstatus = require("../utils/httpStatusCode");

exports.user = async (req, res, next) => {
  try {
    const { email } = req.body;
    const checkUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (checkUser) {
      res
        .status(httpstatus.BADREQUEST)
        .json({ message: "User has already registered" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

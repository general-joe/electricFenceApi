const prisma = require("../utils/prismaUtil");
const httpstatus = require("../utils/httpStatusCode");

exports.checkUserAvailability = async (req, res, next) => {
  try {
    const { email } = req.body;
    const checkUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!email) {
      next()
    } else {
      res
        .status(httpstatus.BADREQUEST)
        .json({ message: "User has already registered" });
    }
  } catch (error) {
    console.log(error);
  }
};

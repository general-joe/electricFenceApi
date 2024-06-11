const prisma = require("../utils/prismaUtil");
const httpstatus = require("../utils/httpStatusCode");

exports.checkUserAvailability = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email
      },
      
    });
    if (user) {
      res
      .status(httpstatus.BADREQUEST)
      .json({ message: "User has already registered" });
    } else {
      next()
     
    }
  } catch (error) {
    console.log(error);
  }
};

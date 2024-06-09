 const { Router } = require("express");
 const router = Router();

 const user = require("../../../controllers/userController");
 const validationError = require("../../../utils/validationError");
 const validationScheme = require("../../../validators/validationSchema");
 const isValid = [
   validationScheme.userValidationRules,
   validationError.validateRequestSchema,
 ];
 const {checkUserAvailability} = require("../../../middlewares/userCheck");

 router.post("/signUp", isValid, checkUserAvailability, user.addUser);
 router.post('login', user.signIn)
 router.get('list', user.listUsers)
 router.get('/:id',user.findUserbyId)
 router.patch('update', user.updateUser)
 router.delete('delete', user.deleteUser)


 module.exports = router;

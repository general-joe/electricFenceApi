 const { Router } = require("express");
 const router = Router();

 const user = require("../../../controllers/userController");
 const validationError = require("../../../utils/validationError");
 const validationScheme = require("../../../validators/validationSchema");
 const isValid = [
   validationScheme.userValidationRules,
   validationError.validateRequestSchema,
 ];
 const availability = require("../../../middlewares/userCheck");

 router.post("/signUp", isValid, availability.user, user.addUser);
//  router.post("/login", client.login);
//  router.get("/list", client.getClients);
//  router.get("/:id", client.getClientById);
//  router.patch("/:id", client.editClient);
//  router.delete("/:id", client.removeClient);

 module.exports = router;

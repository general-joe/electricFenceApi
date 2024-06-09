const { Router } = require("express");
const indexRoute = require("../routes/v1/index");

const rootRouter = Router();

rootRouter.use("/v1", indexRoute);

module.exports = rootRouter;

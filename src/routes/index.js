const { Router } = require("express");

const rootRouter = Router();
const indexRoute = require("../routes/v1/index");

rootRouter.use("/v1", indexRoute);

module.exports = rootRouter;

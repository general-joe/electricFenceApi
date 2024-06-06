const { Router } = require("express");
const rootRouter = Router();
const indexRoute = require("../v1/web/index");
rootRouter.use("/web", indexRoute);

module.exports = rootRouter;

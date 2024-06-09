const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT || 2020;

const cors = require("cors");

const helmet = require("helmet");

const fs = require("fs");

const path = require("path");

const morgan = require("morgan");

// const compression = require("compression");


app.use(express.json({}));

app.use(cors({ credentials: true, origin: true }));

// app.use(
//      compression({
//           threshold: 1024,
//           level: 6,
//      })
// );

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["self"],
        scriptSrc: ["self"],
      },
    },
    frameguard: { action: "deny" },
    noSniff: true,
    xssFilter: false,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status,
    error: err.message,
  });
});
const indexRoute = require("./src/routes/index");

app.use("/api", indexRoute);

app.listen(port, () =>{
  console.log('Server is running on port',`${port}`)
});

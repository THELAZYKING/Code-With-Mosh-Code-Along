const config = require("config");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const morgan = require("Morgan");
const helmet = require("helmet");
const Joi = require("joi");
const auth = require("./Middleware/authentication");
const logger = require("./Middleware/logger");
const courses = require("./routes/courses");
const express = require("express");
const app = express();
const home = require("./routes/home");

app.set("view engine", "pug");
app.set("views", "./views"); //default

// console.log(`Node_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get("env")}`);

//configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server Name: " + config.get("mail.host"));
// console.log("Mail Password: " + config.get("mail.password"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan Enabled ...");
}

//DB work..

dbDebugger("Connected to the database....");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use("./api/courses", courses);
app.use("/", home);

app.use(logger);

app.use(auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

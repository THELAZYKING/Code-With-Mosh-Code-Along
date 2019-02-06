// //exercise : Raise logging (data: message)
// emitter.on("messagelogging", e => console.log("Message Logging", e));

// emitter.emit("messagelogging", { data: "message" });
//.................................................................................

const EventEmitter = require("events");

// const emitter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();

//Register an listener - handling them
logger.on("messageLogged", arg =>
  //e, eventarg
  console.log("Listener Logged", arg)
);

logger.log("message");

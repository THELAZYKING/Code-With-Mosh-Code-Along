// function log(message) {
//   //   //send an Http message
//   //   console.log(message);

//   //   // Raise an event
//   //   emitter.emit("messageLogged", { id: 1, url: "https://" });
//   // }
const EventEmitter = require("events");

var url = "https://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // send an Http message
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "https://" });
  }
}

module.exports = Logger;

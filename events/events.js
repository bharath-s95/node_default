const events = require("events");

var eventEmitter = new events.EventEmitter();

var myEventEmmitter = () => {
    console.log("I hear a scream!");
}

eventEmitter.on('scream', myEventEmmitter);

eventEmitter.emit('scream');
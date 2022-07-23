
// events in node refer to the exact same thing as in front-end development, user clicks a button, user hovers over a button etc
// here's the thing though, up until now, we've handled events by adding an event listener to a DOM element. But in Node, we don't have access to the DOM or the browser in anyway
// here we are talking about applications people download onto their computer like Spotify or Zoom, or onto their phones like apple apps. We need to be able to handle click/hover events for these applications too.

// in node, we utilise event-driven programming. This is a line of thinking that is heavily used in node. 



// need events module
const EventEmitter = require('events');
const { CLIENT_RENEG_LIMIT } = require('tls');
// EventEmitter is a CLASS, and from this class, new objects are created (instances)

const firstEmitter = new EventEmitter();


// there are many methods in this objects, but .on() and .emit() are the ones we will be focusing on
// first you add an event listener by using .on()
// then you emit an event to trigger that event listener

// first argument is a string; the name of the event
// second argument is a callback function that is executed when an event is emitted
firstEmitter.on('response1', function() {
    console.log('event occured #1');
})

// emit event
// the argument must be the exact same string as in the .on() , this is how javascript knows which event listener to trigger
firstEmitter.emit('response1');



// you can add as many different or identical event listeners to the same event, just like in front-end. The original event listener won't be overriden, they will ALL be triggered
firstEmitter.on('response2', function() {
    console.log('event occured #2');
})

firstEmitter.emit('response2');



// order matters, you must listen to an event BEFORE you emit an event in the code, if you don't, an error won't occur, but the callback function won't be executed



// can also pass arguments into the callback function, they coincide to the arguments passed into .emit() excluding the first string
firstEmitter.on('response3', function(number, array) {
    console.log(number);
    console.log(array);
})

firstEmitter.emit('response3', 24, [1, 7]);



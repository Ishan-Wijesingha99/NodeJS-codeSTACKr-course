
// every file in node is a MODULE


// this is how you get access to the exports object. require() basically fetches that object and you save that as a new object which is the firstNamesObject
const firstNamesObject = require('./names-first-module')

console.log(firstNamesObject);



// get access to sayHi function by using require()
const sayHiFunctionObject = require('./sayHiFunction');

console.log(sayHiFunctionObject);

// can now access function in this js file
sayHiFunctionObject.sayHi('Susan');
sayHiFunctionObject.sayHi(firstNamesObject.john);
sayHiFunctionObject.sayHi(firstNamesObject.peter);






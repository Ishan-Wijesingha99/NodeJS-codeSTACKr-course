
// variables
const secret = 'SUPER SECRET';
const john = 'John';
const peter = 'Peter';



console.log(module); // if you have a look at module, it's an object that has certain useful properties. One of these properties in an empty object called exports. Whatever properties are pushed into this exports object will be available in ANY FILE THAT WE USE require()

module.exports = {
    john,
    peter,
}

console.log(module);




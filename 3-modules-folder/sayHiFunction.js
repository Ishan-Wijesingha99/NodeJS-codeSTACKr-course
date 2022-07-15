
// a function
const sayHi = function(firstName) {
    console.log(`Hello there ${firstName}`);
}

// add function to exports object
module.exports = {
    sayHi
};

// check module object
console.log(module)
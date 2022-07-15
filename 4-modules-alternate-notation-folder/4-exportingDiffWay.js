
// a different way of exporting variables and functions
// exporting as you go
module.exports.items = ['item1', 'item2'];

module.exports.person1 = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 34,
    university: 'Monash'
}

module.exports.greetingFunction = function(firstName) {
    console.log(`Greetings ${firstName}`);
}

console.log(module.exports);



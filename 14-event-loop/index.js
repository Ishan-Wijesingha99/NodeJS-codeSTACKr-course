
// javascript is synchronous and single-threaded, which basically means it executes line by line
// for the most part, it is incapable of deferring a line of code to be executed later, and then just moving on to the next line of code

// the event loop basically does this...
// if there is an asynchronous block of code, nodejs will offload the execution of that code until the end
// basically, because javascript is single threaded, all synchronous code will be executed first, and the asynchronous code will be deferred to last



// example 1
console.log('first task'); // this comes first in terminal


const fs = require('fs');

// this is asynchronous 
fs.readFile('../1-intro.js', 'utf8', function(err, result) {
    console.log(result) // this comes last
})


console.log('third task'); // this comes second



// example 2
console.log('first');


// now you might think, we have the timer set to 0, so surely it would execute straight away. Well no, setTimeout is asynchronous, and therefore it's offloaded to the end of execution
setTimeout(function() {
    console.log('second');
}, 0)


console.log('third')








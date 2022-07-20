
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



// why is it so crucial that we offload asynchronous tasks to the end of execution?
// one of the main reasons is so that, when one user sends a request to our server, and it's a very long request that will take some time to complete, we don't want it slowing down our other users that send requests to the server
// that's why they call it blocking vs non-blocking code. Synchronous code blocks other users, asynchronous code is non-blocking of other users





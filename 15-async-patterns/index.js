
// using promises

const fs = require('fs');



// creating a function that returns a promise, that way we can keep reusing this function and just change the arguments so that it's reusable
const readText = function(filePath) {

    return new Promise((resolveCallback, rejectCallback) => {

        fs.readFile(filePath, 'utf8', (error, data) => {
            if(error) {
                rejectCallback(error);
            } else {
                resolveCallback(data);
            }
        })

    })

}

// because this function returns a promise, you can chain .then() and .catch()
// readText('../1-intro.js').then(data => {
//     console.log(data);
//     console.log('it worked!');
// }).catch(error => {
//     console.log(error);
//     console.log('it did not work');
// })



// using async-await to do multiple asynchronous tasks in order
// you'd have to do a lot of chaining and many .then()'s to do multiple asynchronous tasks one after the other
// for example, let's say we want to read a file, then read another new file
// this is made easy with async-await 
const readAndWriteFileAsyncAwait = async function() {
    try {
        // wait until the promise returns as resolved, and only then, execute 'console.log(FirstFileRead)'
        // this is crucial because if we don't wait until this promise is resolved, when we try and log firstFileRead, it will be undefined
        const firstFileRead = await readText('../1-intro.js');
        console.log(firstFileRead);

        // now let's read our second file
        const secondFileRead = await readText('../2-globals.js');
        console.log(secondFileRead);

    } catch (error) {
        console.log(error)
    }
}



readAndWriteFileAsyncAwait('../1-intro.js');
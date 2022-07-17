
const fsModule = require('fs');


// readFile() method
// this is an asynchronous method that executes a callback function 

// first argument is the path of the file you want to be read 
// second argument is the encoding 'utf8'

// readFile() is asynchronous, so node will move on to the next line of code, and the file will be read in the background, just like fetch()
// how do you know when this reading is completed? a callback function will be executed, which is the third argument


// the first placeholder of the callback is err, which is used for handling erros
// the second placeholder of the callback is the data, which is the entire text content of the file that was read
fsModule.readFile('./calc.js', 'utf8', function(err, data) {


    console.log(data) // when the file is done being read asynchronously, log it to the console
})



// writeFile()
// takes three arguments

// first argument is the path of the file we want to create
// second argument is the content you want in the created file
// once this asynchronous task is done, a callback function will be executed, which is the third argument

fsModule.writeFile('./calc2.js', 
`const multiplyFunction = function(a, b) {
    return a*b;
}`
, function(err) {
    console.log('file created!')
})

// if the path specified in the first argument doesn't exist, a file will be created. If it already exists, then that file's content will be mutated



// appendFile()
// first argument is the path to file you want changed
// second argument is the content you want to append
// third argument is the callback function you want executed when the asynchronous task is done

fsModule.appendFile('./calc2.js', 
`\nconsole.log('this line was appended')`
, function(err) {
    console.log('content appended!')
})



// deleting files

// asynchronous way
// fsModule.unlink('pathOfFile', function(err) {
//     console.log('file was deleted!');
// })

// synchronous way
// fsModule.unlinkSync('pathOfFile')
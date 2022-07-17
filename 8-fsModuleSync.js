
const fsModule = require('fs');



// readFileSync
// takes two arguments
// first is the path to whatever file in question
// second is the encoding system, which in this case is just utf-8
const firstTxtFile = fsModule.readFileSync('./join-example-folder/first.txt', 'utf-8');

const secondTxtFile = fsModule.readFileSync('./join-example-folder/second.txt', 'utf-8');



// these will actually log the entire file to the console
console.log(firstTxtFile);
console.log(secondTxtFile); 



// we can write/create a file from the code as well
// the first argument is the path of the file you want to create (basically where you want to create that file)
// the second argument is the content you want that file to have
fsModule.writeFileSync('./join-example-folder/result-sync.txt', 'Hello World!');

// if the file is not there, node will create a new file using writeFileSync. If a file is already there with that path, node will mutate that file to have the specified content



// if you want to append new text, you add a third argument which is an options object
// {flag: 'a'} , this will append the text specified in the second argument to the end




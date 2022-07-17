
// the path module
const path = require('path');

console.log(path); // is an object that has a lot of properties to do with file paths



console.log(path.sep); // this returns the seperator, which is different for different operating systems. because we use windows, the seperator is /



// this .join() literally just concatinates the strings you pass in, seperated by the operating system's unique seperator
// even if we add a / to the end of one string, it will be automatically removed
const textfilePath = path.join('join-example-folder','subfolder','textFile.text');
console.log(textfilePath);



// to get just the basename of a path
const baseFile = path.basename(textfilePath);
console.log(baseFile);



// .resolve() returns an absolute path to a file
const absolutePath = path.resolve(__dirname, 'join-example-folder','subfolder','textFile.text')
console.log(absolutePath);
// __dirname gives the path upto the current file we're writing this code in, so up to 7-pathModule.js
// the file/folder names are concatinated with __dirname
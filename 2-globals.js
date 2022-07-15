
// In Node, these is no window object. Why? There is no browser!

// however, there is a globals object

// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current module
// process - info about the environment where the program is being executed

console.log(__dirname);

console.log(__filename);

console.log(require);

console.log(module);

console.log(process);

setInterval(function() {
    console.log('Hello there')
}, 1000);

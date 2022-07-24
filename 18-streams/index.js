
// streams



// Read File
// when you read a file using ReadFileSync or ReadFile, the file might be very large, then you'd be wasting time loading it up. Also, if the file is large enough, you wont be able to store it as a string in a variable because it will have too many characters.
// this is where streaming comes in. You split the string into chunks and read them one by one



// write a massiveFile using writeFileSync()
const {writeFileSync, createReadStream} = require('fs')

for(let i=0; i < 10000 ; i++) {

    writeFileSync('./massiveFile.txt', `This is a massive file, line ${i}\n\n`, {flag: 'a'})

}



// write a massiveFile using createReadStream
const stream = createReadStream('./massiveFile.txt')

// add event listener to stream variable
stream.on('data', function(data) {
    console.log(data)
    // what you'll notice when you log the data to the console, it's logged in multiple chunks
    // the default is to use around 64kb per chunk, the last chunk/buffer will be the remainder

})



// we can change the size of the buffer to something other than 64kb by passing in a second argument which is an options object
// here we've changed it to 90000 bytes (90kb)
// can also pass in the encoding

// const stream2 = createReadStream('./massiveFile.txt', { highWaterMark: 90000, encoding: 'utf8'})

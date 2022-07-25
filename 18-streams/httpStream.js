
// imagine we use a fetch request to fetch a TON of data from a web API, would it be efficient to send all this information at once? It will take 10 seconds to load and the user will just be waiting there wondering what's going on
// it would be much better to send the data in CHUNKS, that's what streams do

const fs = require('fs')
const http = require('http')

http.createServer((request, response) => {
    
    const fileStream = fs.createReadStream('./massiveFile.txt', 'utf8')

    fileStream.on('open', () => {
        fileStream.pipe(response);
    })

    fileStream.on('error', err => console.log(err))


}).listen(5000)


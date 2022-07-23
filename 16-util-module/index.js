
// the util module
const { readFile, writeFile } = require('fs');
const util = require('util');



// promisify
const readText = util.promisify(readFile);
const writeText = util.promisify(writeFile);

const readAndWriteFileAsyncAwait = async function() {
    try {
        const readFirstFile = await readText('../1-intro.js', 'utf8');
        console.log(readFirstFile);

        const readSecondFile = await readText('../2-globals.js', 'utf8');
        console.log(readSecondFile);

        await writeText('./writtenThirdFile.txt', 'This file was created using promisify and writeFile.')

    } catch (error) {
        console.log(error);
    }
}

readAndWriteFileAsyncAwait();


// middleware is literally just a function that is executed AFTER the request is sent, but BEFORE the response is sent back
// req => middleware => res

const express = require('express')
const app = express()



// in the middleware function, you must specify req, res, next as the parameters
// it's common practise to have middleware functions in seperate files and just import them into index.js
const middlewareFunction = function(req, res, next) {
    const currentTime = new Date()
    const method = req.method

    console.log(`this ${method} request was sent to the server at ${currentTime}`)

    // you MUST ALWAYS end the middleware function by either invoking next() , which ends this middleware function and calls the get request's callback
    // or, you can end the GET request right here by sending something back like 
    // res.status(200).end('request successful #1')
    next()
}



// you specify the middleware you want to execute for this GET request by putting it as as argument
app.get('/', middlewareFunction, (req, res) => {
    res.end('HOME - request was successful #2')
})

app.get('/about', middlewareFunction, (req, res) => {
    res.end('ABOUT - request was successful #2')
})

// for some GET requests you can add the middlewareFunction, and for some you don't



app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})
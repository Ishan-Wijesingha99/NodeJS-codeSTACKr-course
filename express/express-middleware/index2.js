const express = require('express')
const app = express()
const {loggerFunction} = require('./loggerFunction')

// let's say we wanted to use the loggerFunction as middleware for 30 different urls, it would be very tedious for us to add loggerFunction into 30 different app.get()'s

// use this instead to add loggerFunction as middleware to ALL app.get()'s
// this MUST be placed at the top of the code before any app.get()'s
// app.use(loggerFunction)

// you can add middleware to only certain GET requests by including a path
app.use('/api', loggerFunction) // now only urls that start with that will have loggerFunction as middleware

// /api will work
// /api/products will work
// /api/products/v1 will work

// /about/api won't work
// /about/v1/api/id won't work

// it has to START with /api

// middleware won't be applied
app.get('/', (req, res) => {
    res.send('Home')
})

// middleware won't be applied
app.get('/about', (req, res) => {
    res.send('About')
})

// middleware will be applied
app.get('/api', (req, res) => {
    res.send('api')
})

// middleware will be applied
app.get('/api/items', (req, res) => {
    res.send('api-items')
})

// middleware won't be applied
app.get('/about/api/products', (req, res) => {
    res.send('about-api-products')
})

app.listen(5000, () => {
    console.log('server is listening to port 5000...')
})
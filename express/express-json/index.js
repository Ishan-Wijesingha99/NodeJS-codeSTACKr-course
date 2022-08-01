const express = require('express')
const app = express()

// importing products object
const {products} = require('./data')



// just sending back something for the home page as usual
app.get('/', (req, res) => {
    res.send('<h1>This is the home page</h1>')
})



// can send back json on whatever url you wish
app.get('/api', (req, res) => {
    // send back products object as json
    res.status(200).json(products)
})



// here we can use another / and add a unique phrase, we can make this take the user to a specific part of the entire json data
app.get('/api/id1', (req, res) => {
    const singleProduct = products.find(element => element.id === 1)
    
    res.json(singleProduct)
})

// this works, but is horribly inefficient, with express we can use route params instead
// instead of writing id1 we write a colon, followed by a placeholder, this can be any name we want. This is the route paramater
app.get('/api/:productID', (req, res) => {
    // this is how you access whatever is typed in by the user
    // if the user types in /api/1 then req.params will be{productID: '1'}
    // if the user types in /api/17 then req.params will be{productID: '17'}
    console.log(req.params)

    // destruture it out of object
    const {productID} = req.params

    // let's do the same code as above but now programatically so that it works for all possible ids
    const singleProduct = products.find(element => element.id === Number(productID))

    // also need to account for when the user types in something that doesn't correspond to a single product, like a random string
    // if that's the case, singleProduct will be undefined
    if(!singleProduct) res.status(404).send('Product does not exist')

    res.json(singleProduct)
})



// can use multiple route params in one app.get()
app.get('/api/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params) // has multiple properties now
    res.send('Hello World')
})












app.listen(5000, () => {
    console.log('server is listening on port 5000 on local host')
})
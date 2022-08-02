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



// query/URL string parameters
// this is another way of sorting data on a page, as well as only displaying certain sections of data
// query string always starts with query?
// the back-end is where query strings and route paramaters are set up, they only exist on a certain website if they were created in the back-end

// just write query
app.get('/api/v1/query', (req, res) => {
    // this is how you access all the query strings the user types in
    console.log(req.query)
    // this will actually output an object
    // if the user types in query?name=Ishan&age=21&lastName=Wijesingha , then the object 
    // { name: 'Ishan', age: '21', lastName: 'Wijesingha' } will be the output

    // now let's actually create query strings so that the products json array can be sorted in different ways
    // one way is with search=a, all products that start with a will be listed
    // another way is list=3, only 3 products will be listed

    // let's create a completely new object for products, not just a shallow clone that points to the same thing in the heap
    let sortedProducts = [...products]

    // destructure the two queries immediately
    const {search, list} = req.query

    // if search query exists
    if(search) {
        // make the new array only include the objects which have their name property starting with what was written by the user for search variable
        sortedProducts = sortedProducts.filter(productObject => {
            return productObject.name.startsWith(search)
        })
    }

    // if list query exists
    if(list) {
        // make the new array only include the number of objects the user wishes to include
        sortedProducts = sortedProducts.slice(0, Number(list))
    }

    // if the queries are not specified correctly, an empty array will be returned as the json []
    // we can account for this error
    if(sortedProducts.length < 1) {
        return res.status(200).send('no products matched your search')
        // the reason we return this is because we want this callback to stop reading the code after this line. Remember, you can only have one response per get() , so have to end execution if this line is read
    }

    res.status(200).json(sortedProducts)
})











app.listen(5000, () => {
    console.log('server is listening on port 5000 on local host')
})
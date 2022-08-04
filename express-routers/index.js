
// for any complex website, you end up creating HUNDREDS of different http requests using express, many GET requests, many POST requests etc
// routes allow us to group these requests and make the code more elegant

const express = require('express')
const app = express()



// if we set up middleware in this file, ALL requests will have that middleware run. All the http requests written in this file, as well as all the http requests defined in another file and exported here through a router
// so in this case, '/products' will only have one console log, but 'api/features/' will have two console logs, one from this file, one from the apiRoutes file 
app.use((req, res, next) => {
    console.log('This is middleware that was written in index.js')

    next()
})



// instead of writing a GET request and POST request for the same url seperately, can chain them together and use route()
// write the path in route() , omit the path as the first argument in all the http requests
// if you want to apply middleware, you write that as the first argument in .get() and .post() , followed by the callback
app.route('/products')
.get((req, res) => {
    res.send('GET request for /products has been sucessful')
})
.post((req, res) => {
    res.send('POST request for /products has been successful')
})



// an even more useful feature is using routers
// if we have a bunch of http requests involving the endpoint '/api' , we can group all those requests and put them into their own file

// /api/features 
// /api/features/:id
// /api/features/news

// all of these can be handled in one file and then imported to this file easily

// what we're actually importing here is the variable 'router', which we attached to module.exports
// we are just renaming to apiRoute
const apiRoute = require('./apiRoutes')

// the first argument is the start of all endpoints in the file
// the second argument is the variable exported out of that file
app.use('/api', apiRoute)



app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})







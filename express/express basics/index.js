
// all the information you learnt about the http module and creating a web server using that is basically useless because of express. It makes it far easier to create a web application in node.
const express = require('express')

const app = express()



// will be using these methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen



// listening on this port
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})



// GET, POST, PUT and DELETE are all http verbs
// GET - reads the data
// POST - inserts the data
// PUT - updates the data
// DELETE - deletes the data



// this callback function will be invoked every time a user visits the home page, which is '/'
app.get('/', (req, res) => {
    // you can send back a lot of different things, you can send back a basic string, you can send back html, or even json, or an image
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})



// setting up the 404 page
// .all() takes in a callback function that is executed whenever any http request occurs, whether it is GET, POST, PUT etc. Whatever is inside this callback will always be executed when one of those requests are made
// here we use * for 404 pages, whenever you cannot find a path like /about or /faq , you come back to this
app.all('*', (req, res) => {
    // we could send back just this, but we can chain .status() to tell node and the browser that when this callback is executed, this is the status code that will be displayed on the network tab in chrome devtools
    // res.send('<h1>resoruce not found</h1>')

    // w
    res.status(404).send('<h1>resource not found</h1>')
})
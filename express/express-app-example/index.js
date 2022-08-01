
const express = require('express')
const path = require('path')
const app = express()



// do this before you use .get() and .all()
// this is where you tell express the folder that you will be taking all the resources from. All the html, all the images, everything you're going to use.
// a static asset is just a file that the server doesn't have to change. So for instace a html file or an image. The BROWSER might change it and make it dynamic, but for the SERVER it's static.
app.use(express.static('./public'))

// express will check the public folder for index.html and will automatically serve it up to the user for '/' , you don't even need to use app.get() for index.html




app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})


app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
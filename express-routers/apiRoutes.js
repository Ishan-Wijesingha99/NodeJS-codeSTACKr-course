
const express = require('express')

// in this file, we are no longer dealing with an app object, we use the router object
const router = express.Router()



// we can add middleware to the router object just like we did for the app object 
// This middleware will only be run for the http requests WRITTEN IN THIS FILE, only http requests with the endpoint '/api' will have this middleware executed
router.use((req, res, next) => {
    console.log(`current URL is ${req.url} - This middleware function only applies to endpoints with /api`)
    next()
}) 



// the /api part of this endpoint is already implied, you leave that part out in this file
// so this is /api/features
router.route('/features')
.get((req, res) => {
    res.send('GET request for /api/features')
})
.post((req, res) => {
    res.send('POST request for /api/features')
})



router.route('/features/news')
.get((req, res) => {
    res.send('GET request for /api/features/news')
})
.post((req, res) => {
    res.send('POST request for /api/features/news')
})



module.exports = router;

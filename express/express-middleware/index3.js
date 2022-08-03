
const express = require('express')
const {sumFunction} = require('./sumFunction')
const {loggerFunction} = require('./loggerFunction')

const app = express()



// can have multiple middleware functions in app.use()
// they will be executed in order
app.use('/about',[loggerFunction, sumFunction])



app.get('/', (req, res) => {
    res.status(200).end('Home')
})

app.get('/about', (req, res) => {
    res.status(200).end('About')
})

app.get('/about/api', (req, res) => {
    res.status(200).end('About - API')
})

// if you want multiple middleware functions for only one app.get() , use array here
app.get('/questions', [sumFunction, loggerFunction], (req, res) => {
    res.status(200).end('Questions')
})



app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})



// there are plenty of built-in middleware functions in express that we use, check documentation for more details
// one example we've used before is app.use(express.static('./public'))
// we can also get middleware from third party packages that we install using npm
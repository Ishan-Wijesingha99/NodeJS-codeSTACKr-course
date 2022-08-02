
const loggerFunction = function(req, res, next) {
    console.log('Logger middleware function was used sucessfully')

    next()
}

module.exports = {loggerFunction}
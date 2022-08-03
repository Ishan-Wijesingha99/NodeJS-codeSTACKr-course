
const sumFunction = function(num1, num2, next) {
    console.log(num1 + num2)
    next()
}

module.exports = {sumFunction}


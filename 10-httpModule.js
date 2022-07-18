
// the http module
const http = require('http');



// creating a web server
// first argument of this method is a callback function that is executed when the server is created
// first parameter is an object called request, second parameter is an object called response
// request object represents the incoming request from the client
// response object represents the response we send back to the client
const webServer = http.createServer(function(request, response) {

    // in the request object, there is a property called .url() , this is the url that the client has typed in his browser
    // based off this, you can direct the client to different webpages
    if(request.url === '/') {
        // home page end with '/'

        // send back the html you want to display on the web page
        response.write('<h1>Welcome to our home page!</h1>');
    
    } else if(request.url === '/about') {
        // about page

        response.write('<h1>This is the about page!</h1>')

    } else {
        // if the page url the client typed in doesn't exist

        response.write(`
            <h1>Oops, this page does not exist!</h1>
            <p>We can't seem to find the page you're looking for. Please recheck the url.</p>
        `)
    }


    // once you're done with your response, end it
    response.end();
})



// assign the port your web server is going to be listening too
webServer.listen(5000); // localhost:5000

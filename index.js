var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! This is my first Node.js server");

});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Hello world! My name is Saku, and this is my first Node.js server");

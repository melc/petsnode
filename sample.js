console.log("hello world")

var http = require("http")
http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text-plain"});
        response.write("Hi First NodeJS App");
        response.end();
    }
).listen(8888)
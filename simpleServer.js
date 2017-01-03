/*
	A Simple server in Node.js
*/

var http = require('http');					
var host = "127.0.0.1";						
var port = 8080;
var server = http.createServer(function(request,response)
{
	response.writeHead(200,{"Content-Type": "text/html"});		
	response.write("<html><head><title>Hello World</title></head><body><h1><u><center> Hellooo Folks .. !! </center></u></h1></body></html>");	// HTML content
	response.end();
	
});

server.listen(port, host, function(){
	console.log("Server started successfully ");
	console.log("listening at  " + host + ":" + port );
});
	
	
	
/*
	A Simple server in Node.js which is displaying UNDEFINED on the webpage because of the asynchronous property of node.js.
*/
var http = require('http');	
var fs = require('fs');				
var host = "127.0.0.1";						
var port = 8080;
var contents = fs.readFile("data.txt", function(error, data) {
	console.log("Contents: " + data);
});
console.log(contents); 	//Printing the contents of the file on console which is UNDEFINED here because this will not wait for the file to be read.
console.log("Hello!"); 	//Just a test line to show that the code is running Asynchronously. 


var server = http.createServer(function(request,response)
{

	response.writeHead(200,{"Content-Type": "text/html"});		
	response.write("<html><head><title>Hello World</title></head><body><h1><u><center>" +  contents + "</center></u></h1></body></html>");	// Printing contents of the file on the web page.
	response.end();
	
});

server.listen(port, host, function(){
	console.log("Server started successfully ");
	console.log("listening at  " + host + ":" + port );
});

/*
	A Simple server in Node.js which is displaying the contents of a file.
*/

var http = require('http');	
var fs = require('fs');				
var host = "127.0.0.1";						
var port = 8080;
var contents = fs.readFileSync("data.txt").toString();
console.log(contents); 	//Printing the contents of the file on console.
console.log("Hello!"); 	//Just a test line to show that the code is running synchronously. 


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

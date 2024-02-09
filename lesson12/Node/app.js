/**
 * @author Luiz 
 */
console.log("Starting Http server for Hello World...");
const http = require ('http');
//create and start an HTTP Server
http.createServer( function(req, res){
    res.writeHead(200,
        {
            "Content-Type": "text/html"
        });
    const pageContent    
    res.end("<h1>Hello World</h1>");    
}).listen(8080);
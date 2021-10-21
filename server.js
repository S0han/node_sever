var http = require('http');

var server = http.createServer(function(req, res) {

    // if (req.url == '/') {

    //     //set response header
    //     res.writeHead(200, {'Content-Type': 'text/html'});

    //     //set response content
    //     res.write('<html><body><p> This is the homepage.</p> </body></html>');
    //     res.end();
    
    // }
    // else if (req.url == '/student') {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<html><body><p>This is the student page.</p></body></html>');
    //     res.end();
    // }
    // else if (req.url == "/admin") {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<html><body><p>This is admin page.</p></body></html>');
    // }
    // else {
    //     res.end('Invalid Request!');
    // }

    if (req.url == '/data') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: "Hello World"}));
        res.end();
    }


});

server.listen(5000);

console.log('Node.js web server at port 5000 is running...');
console.log(">>>>> app.js start");
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('server is started');
});

server.listen(8000);
console.log("app.js done <<<<<");
// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Entry point for node package manager
// ----------------------------------------------------------------------------

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end('Hello World!');
}).listen(8080);

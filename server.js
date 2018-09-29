// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Default entry point for npm start
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
var http = require('http'); // Built-in Node.js module to act like HTTP server
// ----------------------------------------------------------------------------

// Creates server using createServer method
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end('Hello World!');
}).listen(8080);

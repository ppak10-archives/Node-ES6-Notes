// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Base script to start node server
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import http from 'http'; // Built-in Node.js module to act like HTTP server
// ----------------------------------------------------------------------------

// Creates server using createServer method
http.createServer(function (request, response) {

  if (request.url === '/'){ // If URL is homepage
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    var html = "Hello World"
    response.end(html)
  } else {  // Else if URL does not exist
    response.statusCode = 404
    response.end()
  }
// HTTP server listens in on port 3000
}).listen(3000, function(error){
  if (error) {
    throw error
  }
  console.log('Listening on port 3000...')
});

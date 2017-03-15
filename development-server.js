

// NOTE: Basic server for usage on a guest kernel during development.

const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {

  const pathname = require('url').parse(req.url, true).pathname;

  if (pathname == '/assets/bundle.js') {

    console.log('bundle requested')
    res.writeHead(200, {'Content-Type': 'application/javascript'})
    fs.readFile('./public/bundle.js', 'utf8', function(err, data) {
      if (err) throw err
      res.end(data)
    })

  } else {

    console.log('html requested')
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', 'utf8', function(err, data) {
      if (err) throw err
      res.end(data)
    })
  }
}).listen(80);

console.log('Node server running')
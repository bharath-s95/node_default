const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var query = url.parse(req.url, true).query;
    res.write('<h1>' + query.name + '</h1>');
    res.end()
}).listen(8080);
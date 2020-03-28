var fs = require("fs");
var http = require("http");

http.createServer((req, res) => {
    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end();
    });
}).listen(8080);
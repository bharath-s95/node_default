const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const path = q.pathname;
    const query = q.query;
    const host = q.host;
    fs.readFile("." + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'Content-Type' });
        res.write(data);
        return res.end();
    })
}).listen(8080);
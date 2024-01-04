const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end("WELCOME TO OUR HOMEPAGE");
    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.end("HERE IS OUR SHORT HISTORY");
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(
            `<h1>Ooops!</h1>
            <p>WE CANT SEEM TO FIND THIS PAGE</p>
            <a href="/">BACK HOME</a>`
        );
    }
});

server.listen(5000);

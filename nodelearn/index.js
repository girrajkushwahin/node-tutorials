// serving static files in node js(http server without express) -
const fs = require('fs');
// const fs = require('fs').promises; // when we code all fs operations in promise way
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const data = fs.readFileSync('./public/index.html', 'utf-8');

// event driven approach to do code at server [i.e., server.on()]
const server = http.createServer();

server.on('request', async (req, res) => {

    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        // res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
        // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        // res.statusCode = 200;
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });

        res.end();
        return;
    }

    // const parsedURL = url.parse(req.url, 'true');
    // Here above, if we pass 'true' as 2nd argument in url.parse() method, then parsedURL.query will be the object where we will have all queries of an url in key-value pair. if 2nd argument not given then parsedURL.query will be the string of queries.

    const parsedURL = url.parse(req.url);
    const { pathname: path } = parsedURL;
    // going to use 'pathname' property of parsedURL as 'path' in below code -

    const query = querystring.parse(parsedURL.query);
    // query is an object where we have all queries of an url in key-value pair

    if (path === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    }
    else if (path === '/about') {

        // callback function for async task -
        // fs.readFile('./public/about.html', 'utf-8', (err, data) => {
        //     if (err) {
        //         console.error('Error reading file:', err); // Log the error for debugging
        //         res.writeHead(500, { 'Content-Type': 'text/plain' });
        //         res.end('Internal server error');
        //         return; // Stop further execution
        //     }
        //     else {
        //         res.writeHead(200, { "Content-Type": "text/html" })
        //         // res.write(data);
        //         res.end(data);
        //     }
        // })


        // Promise way for async task -
        // fs.promises.readFile('./public/about.html', 'utf-8')
        //     .then((data) => {
        //         res.writeHead(200, { "Content-Type": "text/html" })
        //         res.end(data);
        //     })
        //     .catch((err) => {
        //         console.error('Error reading file:', err);
        //         res.writeHead(500, { "Content-Type": "text/plain" })
        //         res.end('Internal server error');
        //     })


        // async-await way for async task -
        try {
            const data = await fs.promises.readFile('./public/about.html', 'utf-8');
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        } catch (err) {
            console.error(err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end('Internal server error');
        }

    }
    else if (path === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('this is contact page');
    }
    else if (path === '/style.css') {
        fs.readFile('./public/style.css', 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err); // Log the error for debugging
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal server error');
                return; // Stop further execution
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    }
    else res.end('<h1>404 not found</h1>');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listennig to port 8000');
});

// more to code and regex concept comes here in node
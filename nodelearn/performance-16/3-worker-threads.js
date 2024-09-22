// This code will run in main thread -

const { Worker } = require('node:worker_threads');
const http = require('node:http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("HomePage");
    } else if (req.url === '/slow-page') {
        const worker = new Worker('./thread.js'); // creating a thread
        worker.postMessage({ message: 'Hello from the main thread!' }); // sending data to thread we created

        worker.on('message', (j) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`SlowPage: ${j}`);
        })

        worker.on('error', (error) => {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end(`SlowPage: Error occured on server`);
        })

        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker stopped with exit code ${code}`);
            }
        });
    }
})

server.listen(8000, () => {
    console.log('server running on PORT 8000')
})
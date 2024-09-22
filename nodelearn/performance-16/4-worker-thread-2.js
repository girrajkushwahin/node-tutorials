// This code will run in main thread -

const { Worker } = require('node:worker_threads');
const http = require('node:http');
const os = require('node:os');

const totalCPUs = os.cpus().length;

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("HomePage");

    } else if (req.url === '/slow-page') {

        const workerPromises = [];
        for (let i = 0; i < totalCPUs; i++) workerPromises.push(createWorker());
        const threadResults = await Promise.all(workerPromises);
        let total = 0;
        for (let i = 0; i < totalCPUs; i++) total += threadResults[i];
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`SlowPage result is - ${total}`);
    }
})

server.listen(8000, () => {
    console.log('server running on PORT 8000')
})

function createWorker() {
    return new Promise((resolve, reject) => {
        // thread creation and sending data while creating thread -
        const worker = new Worker('./my-thread.js', { workerData: totalCPUs });

        worker.on('message', (data) => {
            resolve(data);
        })

        worker.on('error', (error) => {
            reject(`SlowPage: Error - ${error}`);
        })

        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker stopped with exit code ${code}`);
            }
        });
    })
}

// Terminate the worker threads after completing the task
// If you want to use worker threads for other tasks and don't want to terminate then use the concept of 'worker thread pool' and same thing can be done for 'child processes' and 'child process pool' can be created.
const cluster = require('node:cluster')
const os = require('node:os')
const express = require('express')

const totalCPUs = os.cpus().length // "os.availableParallelism()" also returns length of cpus

if (cluster.isPrimary) {
    console.log(`primary process with id ${process.pid} running`);

    // spawning worker processes or creating worker processes -
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork(); // used to spawn (create) a new worker process. Forking worker means creating a worker process.
    }

    // The 'exit' event is triggered whenever a worker process exits (dies), due to a crash, error, or worker was intentionally stopped.
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork(); // if any worker process killed then create another worker process.
    });

} else {
    const app = express()
    const PORT = 8000

    app.get('/', (req, res) => {
        return res.status(200).json({ status: 'success', message: `Hello from express server & pid - ${process.pid}` })
    })

    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT} & process id is ${process.pid}`)
    })
}


// Worker processes can communicate each other through Primary process(master process) using IPC(inter-process communication) -


/*
if (cluster.isPrimary) {
    console.log(`primary process with id ${process.pid} running`);

    for (let i = 0; i < totalCPUs; i++) {
        const worker = cluster.fork();

        // Listen for messages from workers
        worker.on('message', (message) => {
            console.log(`Message from worker ${worker.process.pid}:`, message);

            // Optionally forward the message to all workers
            for (const id in cluster.workers) {
                if (cluster.workers[id].process.pid !== worker.process.pid) {
                    cluster.workers[id].send(message);
                }
            }
        });
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    const app = express()
    const PORT = 8000

    app.get('/', (req, res) => {
        // Send a message to the Primary process
        process.send({ message: `Request handled by worker ${process.pid}` });

        return res.status(200).json({ status: 'success', message: `Hello from express server & pid - ${process.pid}` })
    })

    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT} & process id is ${process.pid}`)
    })

    // Listen for messages from the Primary process or other workers
    process.on('message', (message) => {
        console.log(`Worker ${process.pid} received message:`, message);
    });
}
*/


// check docs for more information about this topic/concept.
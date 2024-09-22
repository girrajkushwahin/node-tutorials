// thread is created for executing this code -
const { parentPort } = require('node:worker_threads');

// for receiving data from main thread -
parentPort.on('message', (data) => {
    console.log('Received from main thread:', data);
})

let j = 0;
for (let i = 0; i < 6000000000; i++) j++;

parentPort.postMessage(j); // for sending data to main thread
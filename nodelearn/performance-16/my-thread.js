// thread is created for executing this code -
const { parentPort, workerData } = require('node:worker_threads');

// 'workerData' is used to get initial data from main thread that is sent at the time of thread creation

let j = 0;
for (let i = 0; i < 4000000000 / workerData; i++) j++;

parentPort.postMessage(j); // for sending data to main thread
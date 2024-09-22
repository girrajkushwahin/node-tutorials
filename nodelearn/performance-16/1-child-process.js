// exec, execFile, and spawn: Used to run external commands or executables, typically through a shell. We can run command inside a shell and can get outback back in the terminal
// fork: Used to spawn a new Node.js process to run JavaScript code.
// using exec, execFile, and spawn will run commands or scripts, while fork will allow you to run a separate JavaScript file/process

const { exec, execFile, spawn, fork } = require('node:child_process');

/*
exec('ipconfig', (err, stdout, stderr) => {
    if (err) {
        console.log(`error: ${err.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr.message}`);
        return;
    }
    console.log(`stdout: ${stdout}`);

    // err - error come when executing the command (eg- when command does not exist on your system or missing arguments in a command)
    // stdout -
    // stderr - standard error, the command has been executed but error come in the terminal

    // problem in the exec() - all the standard output is stored in buffer then it is printend in the console. command which give huge output then we can't use exec() and we will get this error - "stdout maxbuffer length exceeded".
    // for commands which generate huge output, we use spawn()
})
*/


/*
execFile("\dir.bat", (err, stdout, stderr) => {
    if (err) {
        console.log(`error: ${err.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr.message}`);
        return;
    }
    console.log(`stdout: ${stdout}`);

    // execFile() takes file path and executes it
})
*/


/*
const child = spawn('ipconfig', ['/all']); // array contains arguments of command

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
})

child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
})

child.on('error', (err) => {
    console.log(`error: ${err.message}`)
})

child.on('exit', (code, signal) => {
    if (code) console.log(`process exit with code: ${code}`);
    if (signal) console.log(`process killed with signal ${signal}`);
    console.log("Done✅");

    // code is exit code and signal is signal
    // exec() and execFile() use 'buffers' to capture the output of the child process. It means that the entire output is stored in memory before it's made available to your Node.js application. It is inefficient for large amounts of data.
    // spawn() uses 'streams' to handle the output of the child process. It allows the data to be processed in chunks as it's generated, which can be more efficient for large datasets.
})
*/


/*
const express = require('express');
const app = express();

app.get("/one", (req, res) => {
    const sum = longComputation();
    res.send({ sum });
})

app.get("/two", async (req, res) => {
    const sum = await longComputationPromise();
    res.send({ sum });
})

app.get("/three", (req, res) => {
    const child = fork('./computation.js');
    child.send('start');
    child.on('message', (sum) => {
        res.send({ sum });
    })
})

app.listen(8000, () => console.log('express server running'));

function longComputation() {
    let sum = 0;
    for (let i = 0; i < 10 ** 9; i++) sum += i; // 10**9 means 10 power 9
    return sum;
}

function longComputationPromise() {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (let i = 0; i < 10 ** 9; i++) sum += i; // 10**9 means 10 power 9
        resolve(sum);
    })
}
*/

// check docs for more information about this topic/concept.
// Terminate the worker processes(child processes) after completing the task
// If you want to use worker processes for other tasks and don't want to terminate then use the concept of 'child process pool'
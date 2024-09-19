// const http=require('http');

// const server=http.createServer((req,res)=>{
//     // console.log(req.url);
//     res.write('Hello from the other side'); // res.end() can also send this response
//     res.end(); // for ending the response(compulsory), can also write messege here if needed
// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('listennig to port 8000')
// })
// for creating a http server




// const http = require('http');

// const server = http.createServer((req, res) => {
//     // console.log(req.url);
//     if (req.url === '/') res.end('Hello from home side');
//     else if (req.url === '/about') res.end('Hello from about side');
//     else if (req.url === '/contact') res.end('Hello from contact side');
//     else if (req.url === '/usersapi') {
//         res.write('Hello from userapi side');
//         res.end();
//     }
//     else {
//         res.writeHead(404, { "Content-type": "text/html" });
//         res.end('<h1>404 not found</h1>');
//     }
// })
// server.listen(8000, '127.0.0.1', () => {
//     console.log('listennig to port 8000')
// })
// for routing http request




// userapi12 part -
const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/../userapi12/userapi.json`, 'UTF-8')
const objData = JSON.parse(data);

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') res.end('Hello from home side');
    else if (req.url === '/about') res.end('Hello from about side');
    else if (req.url === '/contact') res.end('Hello from contact side');
    else if (req.url === '/usersapi') {
        // fs.readFile(`${__dirname}/../userapi12/userapi.json`,'UTF-8',(err,data)=>{
        //     if(err) console.log(err);
        //     else{
        //         // console.log(data);
        //         const objData=JSON.parse(data)
        //         // console.log(objData)
        //         res.writeHead(200,{"content-type":"application/json"});
        //         res.write(objData[0].name);
        //         res.end();
        //     }
        // })
        res.writeHead(200, { "content-type": "application/json" });
        // res.setHeader() and res.statusCode=200 property both done in single call using res.writeHead()
        res.write(objData[0].name);
        res.end();
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end('<h1>404 not found</h1>');
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listennig to port 8000')
})
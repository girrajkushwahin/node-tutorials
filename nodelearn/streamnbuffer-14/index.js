// const fs=require('fs');
// const http=require('http');

// const server=http.createServer();

// server.on('request',(req,res)=>{
//     fs.readFile('input.txt',(err,data)=>{
//         if(err) console.error(err);
//         else res.end(data);
//     })
// })
// //i think,we request in url then request event will be emitted somwhow.(for server.on)

// server.listen(8000,'127.0.0.1');
// it reads complete file and then give response.




// const fs=require('fs');
// const http=require('http');

// const server=http.createServer();

// server.on('request',(req,res)=>{
//     const rstream=fs.createReadStream('input.txt');
//     rstream.on('data',(chunkdata)=>{
//         res.write(chunkdata);
//     })
//     rstream.on('end',()=>{
//         res.end();
//     })
//     rstream.on('error',(err)=>{
//         console.error(err);
//         res.end('file not found')
//     })
// })
//  // i think,we request in url then request event will be emitted somwhow.

// server.listen(8000,'127.0.0.1');
// it does not read whole data but it reads data and immediately after reading gives us response. it reads the data gives response together.




const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res); // 'response' object is instance of writable stream ?
})
// most efficient way and fast then previous two
server.listen(8000, '127.0.0.1');
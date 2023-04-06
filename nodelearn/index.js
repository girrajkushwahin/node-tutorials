// serving static files in node js(http server without express) -
const fs=require('fs');
const http=require('http');

const data=fs.readFileSync('./public/index.html')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        // fs.readFile('./public/index.html',(err,data)=>{
        //     if(err) throw err;
        //     else{
        //         // res.write(data);
        //         res.writeHead(200,{"Content-Type":"text/html"})
        //         res.end(data);
        //     }
        // })

        res.write(data);
        res.end();
    }
    else if(req.url==='/about'){
        fs.readFile('./public/about.html',(err,data)=>{
            if(err) throw err;
            else{
                // res.write(data);
                res.writeHead(200,{"Content-Type":"text/html"})
                res.end(data);
            }
        })
    }
    else res.end('<h1>404 not found</h1>')
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('listennig to port 8000')
})

// more to code and regex concept comes here.
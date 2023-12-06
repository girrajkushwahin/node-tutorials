// in async methods of fs, we pass function as argument. i.e, a callback method, callback method means which is called at the last after the original function completes its task.
// the callback function has arguments which tells us that whether the operation completed successfully or not.
// then, we need to say, what to do after original method completes its task. in the callback method body. even it's nothing and start checking for errors.


const fs = require('fs');

// fs.writeFile('myfile.txt','i m dhananjay',(err)=>{
//     if(err) console.log(err);
//     else console.log('data inserted');
// });
// for creating file and inserting data


// fs.appendFile('myfile.txt',' my brother is girraj',(err)=>{
//     if(err) console.log(err);
//     else console.log('append success');
// })
// used to write data in existing file without overwriting the old data.
// if file is not created already then it will create a new file and write the data.


// fs.readFile('myfile.txt','UTF-8',(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data);
// })
// at the time of read from file in async version, we have to pass 2 arguments in the callback method and first argument should be always for error and another one is for response/data that we will get from readFile method.


// fs.mkdir('nodejsgirraj',(err)=>{
//     if(err) console.log(err);
//     else console.log('success');
// })
// for creating directory


// fs.rename('myfile.txt','file.txt',(err)=>{
//     if (err) console.log(err);
//     else console.log('success');
// })
// for renaming a file


// fs.rename('wastegk','nodegirraj',(err)=>{
//     if(err) console.log(err);
//     else console.log('success');
// })
// for renaming a directory


// fs.unlink('demo.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log("success");
// })
// for deleting a file


// fs.rmdir('nodegirraj',(err)=>{
//     if(err) console.log(err);
//     else console.log('success');
// })
// for deleting a directory
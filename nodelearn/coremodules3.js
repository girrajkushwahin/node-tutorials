// Node js has a set of built in modules which you can use without any further installation. let's see fs module first (file system module)

// Note: don't use sync methods, it's not good practise. use async mehtods.we did it to learn only.

const fs = require('fs');

// fs.writeFileSync('read.txt', 'girraj is learning node');

// it creates a new file if the file is not present and write the data in it.
// if the file is already present then it will overwrite the data.


// fs.appendFileSync('read.txt', ' i am going to develop project');

// used to write data in existing file without overwriting the old data.
// if file is not created already then it will create a new file and write the data.


// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// Node js includes an additional data type called "Buffer" (not available in browser's javascript)
// Buffer is mainly used to store binary data
// common while reading from a file or receiving packets over the network


// const org_data = buf_data.toString();
// console.log(org_data);
// can use this if we want data in readable form.


// fs.renameSync('read.txt', 'readwrite.txt');
// used for renaming a file


// fs.mkdirSync('nodebyme'); // can pass path where to create folder in the arguments
// for creating a directory


// const data = fs.readFileSync("readwrite.txt", 'utf8');
// console.log(data);
// for reading a file without getting buffer data, we passed encoding parameter there


// fs.unlinkSync('demo.txt');
// for deleting a file


// fs.renameSync('nodejsgirraj', 'nodegk');
// for renaming a directory


// fs.rmdirSync('demo');
// for deleting a directory
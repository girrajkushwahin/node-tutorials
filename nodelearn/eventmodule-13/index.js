const EventEmitter=require('events');
const event=new EventEmitter();

// example 1

// event.on('writename',()=>{
//     console.log("my name is Dhananjay");
// })
// event definition(event listening word good or event registration), can't define after fire.

// event.emit('writename');
// event fire/ event emiting




// example 2

// event.on('showname',()=>{
//     console.log("Dhananjay");
// })
// event.on('showname',()=>{
//     console.log("Girraj");
// })
// event.on('showname',()=>{
//     console.log("we are brothers");
// })

// event.emit('showname');




// example 3

// event.on('showname',(sc,page)=>{
//     console.log(`code is ${sc} and page is ${page}`);
// })

// event.emit('showname',200,'ok');
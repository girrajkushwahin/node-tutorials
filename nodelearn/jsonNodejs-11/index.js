const fs=require('fs');
const bioData={
    name:'girraj',
    age:20,
    city:'bhopal'
}
// const jsonData=JSON.stringify(bioData);
// console.log(jsonData)
// console.log(jsonData.city); // returns undefined, can't access like objects, it is json data

// const objData=JSON.parse(jsonData);
// console.log(objData)
// console.log(objData.city); // can access because this is object



// task -
// convert bioData to JSON
// then add it to another file
// then readfile
// then convert back to js object
// console.log it.

const changeData=JSON.stringify(bioData);
// fs.writeFile('json1.json',changeData,(err)=>{
//     if(err) console.log(err)
//     else console.log('success')
// })
fs.readFile('json1.json','UTF-8',(err,data)=>{
    if(err) console.log(err)
    else{
        const orgData=JSON.parse(data);
        console.log(orgData);
    }
})
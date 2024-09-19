// const add=require('./operator');

// console.log(add(5,5));
// console.log(add); // name is exported form operator module.



// const operator=require('./operator');
// const {addme, subme}=require('./operator'); // object destructuring

// console.log(operator);
// console.log(operator.addme(5,5));
// console.log(operator.subme(10,5));
// after object destructuring -
// console.log(addme(5,5));
// console.log(subme(10,5));



const {add, sub, name, mult}=require('./operator');
// const data=require('./operator');

console.log(add(5,5));
console.log(sub(10,5));
console.log(mult(10,5));
console.log(name);
// console.log(data.add(5,5));
// console.log(data.sub(10,5));
// console.log(data.mult(10,5));
// console.log(data.name);
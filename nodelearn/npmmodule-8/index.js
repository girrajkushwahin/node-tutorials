// const chalk= require('chalk');

// // why this module not working?
// console.log(chalk.blue('hello world'));
// console.log(chalk.blue.italic('hello world'));
// console.log(chalk.blue.underline('hello world'));
// console.log(chalk.blue.underline.inverse('hello world'));
// console.log(chalk.green.underline.inverse('success'));
// console.log(chalk.red.underline.inverse('false'));



const validator=require('validator');
const res=validator.isEmail('girraj@mail.com');
console.log(res);



// npm install -g nodemon // for installing nodemon globally
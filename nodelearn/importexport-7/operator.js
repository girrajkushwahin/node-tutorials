const add=(a,b)=>{
    return a+b;
}

const sub=(a,b)=>{
    return a-b;
}

const mult=(a,b)=>{
    return a*b;
}

const name='girraj';

// module.exports=add;
// module.exports=name; // these exports are good if exporting single value



// module.exports.addme=add; // 'addme' can written as 'add' if we want.
// module.exports.subme=sub; // when you want to export multiple value. here, an object will be created and addme and subme keys will hold their own data(function). then while importing this object will be returned by require method. and object properties will be accessed by using dot operator.



module.exports={add, sub, mult, name}; // we passed values here, keys will be internally provided and require returns object with these values while importing.
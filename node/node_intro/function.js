let test = "DAN";
function hello(name){
    console.log("Hello " + name);
}

// console.log(module);

module.exports.hello = hello;

let person = {nam:"DAN", age:27};
module.exports.person = person;

const person = {
    first_name: "Harsh",
    last_name: "Gurm",
    age: "29",
    city: "Brampton"
}

console.log("First Name " + person.first_name + "Last Name: " + person.last_name);


const car = {
    make: "Kia",
    model: "Stinger",
    year: "2019",
    
}



console.log("Make: " + car.make + " model: " + car.model + " year: " + car.year);



var names_arr = ["Harsh", "Dan", "Runda", "Steph"];

var cars_arr = new Array("Honda", "Kia", "Tesla");

console.log(cars_arr.length);

console.log(names_arr[1]);


console.log(names_arr.indexOf("Runda"));


if(names_arr.indexOf("Sam") != -1){
    console.log("Sam exists")
} else {
    console.log("User is not found")
}


names_arr.push("Jeff", "Bob");

names_arr[0] = "Gurm"

console.log(names_arr[0]);

var full_name = "Harshvir Singh Gurm";
var short_name = full_name.substr(0,5);
console.log(short_name);

function hello(name){
    console.log("Hello " + name)
}

hello (names_arr)

function CalcPercent(name, total_marks){
    let percentage = total_marks/500 * 100
    console.log("Hello " + name + "you got " + percentage + " % ")
}

CalcPercent("Dan", 400)
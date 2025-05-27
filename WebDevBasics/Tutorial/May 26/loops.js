let num = 50;

const names = ["Harsh", "Runda", "Stephanie", "Dan", "John", "Rob"];


for(let i=0; i < names.length; i++){
    console.log('the value of ' + names[i]);
}


for(let i in names){
    if(names[i] == "John"){
    names[i] == "John Wick";
    }
}
console.log(names);

const per = {firstname: "Harsh", lastname: "Gurm", city: "Calghary"}
for(let i in per) {
    console.log(per[i])
}


function hello(name){
    console.log("Hello " + name);
}

for (let i in names){
    hello(names[i])
}

names.forEach( (i) => console.log("using for each ", i));


let val = 0;
while(val <10){
    val++;
    console.log("while loop ", val);
}


var two_dim_arr = [
    ["Harsh", "Gurm", 25],
    ["Dan", "Christakos", 26]
    ["George", "Brown", 35]
]

console.log(two_dim_arr[0][0])

// for(let i in names) {
//     if(names[i] == "John"){
//     console.log(names[i]);
//     }
// }
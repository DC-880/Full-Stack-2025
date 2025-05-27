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


// let val = 0;
// while(val <10){
//     console.log("while loop ", val);
// }
function AddNumbers(num1, num2){
    return num1 + num2
}

const result = AddNumbers(7, 4)
console.log(result);


function Swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(a, b);
}


function Compare(a, b) {
    if(a > b) {
        return "a is bigger";
    }
    else {
        return "b is bigger";
    }
}

function isEven(num) {
    return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
}

const num_list = [1, 6, 9, 60, 457]


for(let i = 0; i < num_list.length; i++) {

}

while(age <= 25) {
    console.log('too young')
    age += 1;
}


function Search(num_list, key) {
     for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] === key)
            return `found ${key} at position ${i}`;
}
else (return `${key} not found`)
}



function Maximum(num_list) {
    let max = 0;
    for (let num of num_list) {
        if(num > max) 
            max = num;
        }
    }
    return `Maximum number in the list is: ${max}`;

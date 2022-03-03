//app.js

let a=1;
console.log("a is: "+a);

const numbers = [1,2,3,4,5];
console.log("Sum is: "+sumNumbers(numbers));

function sumNumbers(numbers) {
    let sum=0;
    for(let index = 0; index <numbers.length;index++){
        sum+=numbers[index];
    }
    return sum;
}
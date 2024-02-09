// closure.js

//console.log("hello closure!!!");

// function makeFunc(){
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc();
// myFunc();

//the closure bug

// const funcs = [];
// for(var i=0;i<5;i++){
//     funcs[i] = function(){
//         return i;
//     }
// }
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());

//solution 1 using ES6+ for closure bug
// const funcs = [];
// for(let i=0;i<5;i++){
//     funcs[i] = function(){
//         return i;
//     }
// }
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());

//solution 2 for closure bug
const helper = function(n){
    return function (){
        return n;
    }
}
const funcs = [];
for(let i=0;i<5;i++){
    funcs[i] = helper(i);
    }

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());

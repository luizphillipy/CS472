// app.js
// Assignment 6

// var add = (function(){
//     var counter=0;
//     return function(){
//         return counter+=1;
//     }
// })();

// const count = (function(){
//     var counter=0;
//     var val=0;
//     add = function (val){
//         return counter+=val;
//     };
//     reset = function (){
//         return counter=0;

//     };
    
//     return {
//         add:add,
//         reset:reset,
        
//     }
// })
// console.log(count.add());
// console.log(count.add());
// console.log(count.reset());
// console.log(count.add());
const make_adder = (function(inc){
    let counter = 0;
    return function() {
        return counter+=inc;
    }

});
add5 = make_adder(5);
console.log(add5());
console.log(add5());
add7 = make_adder(7);
console.log(add7());
console.log(add7());



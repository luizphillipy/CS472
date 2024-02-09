// app.js
// Assignment 6

var add = (function(){
    var counter=0;
    return function(){
        return counter+=1;
    }
})();

const count = (function(){
    var counter=0;
    add = function (){
        return counter+=1;
    };
    reset = function (){
        return counter=0;

    };
    return {
        add:add,
        reset:reset
    }
})();
console.log(count.add());
console.log(count.add());
console.log(count.reset());
console.log(count.add());

//"this" in GLobal env
"use strict"
console.log(this);
// "this" in Function env
function f(){
    console.log("this inside f: "+this);
}
f();

//"this " in object literal

const obj = {
    name: "Anna",
    printThis: function() {
        console.log(this);
    },
    getName: function() {
        return this.name;
    }
}
obj.printThis();
console.log(obj.getName());

//function

function sam() {
    this.newVar = "hello";
    
}
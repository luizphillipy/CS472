/**
 * Assigment 6: 
 * 1.	Define a JavaScript object literal named, person, with the following specification:
a.	Person object should have the properties:
i.	name (initialize this with empty string value)
ii.	dateOfBirth (initialize this with empty string value or null)
b.	Person object should have the methods:
i.	getName (should return the value of the person’s name property)
ii.	setName (should take as input parameter, a String value which it sets as the person’s name) 

Given that someone named John IS-A person, applying JavaScript inheritance and the Object.create(…) 
method, create an object named, john, whose name property is set to the string, 
“John” and whose dateOfBirth property is set to the date, December 10th, 1998.

Print-out to the console, the information about the person named John, in the following format:
“The person’s name is John”
“John was born on 1998-12-10”

 */
"use strict"
const person = {
    name: "",
    dateOfBirth: null,

    getName:function(){
    return this.name;
    },
    setName: function(name){
        this.name=name;
    }
    
};
const john = Object.create(person,{
    name: {
        value:"John"
    },
    dateOfBirth:{
        value: new Date (1998,11,10)
    }
});
console.log("The person’s name is "+ john.getName());
console.log(john.getName()+" was born on "+john.dateOfBirth.toISOString().substring(0, 10));
//
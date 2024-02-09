/**
 * 3.	Re-write the person object specification described in Question 1 above, but this time, 
 * using a Constructor Function named, Person. Then, add a method named, toString() 
 * to the person object, which return the string representation of the person object data in the
 *  format:

{Name: John, DateOfBirth: 1998-12-10}

Using your constructor function for the person object, create a person named, Peter, whose date 
of birth is November 10, 1985.

Print-out to the console, the information for the person named, Peter, 
using its toString() method. 
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

 */
function Person(name,dateOfBirth){
    this.name=name;
    this.dateOfBirth= dateOfBirth;
    
    
}
Person.prototype.toString =function(){
    
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.toISOString().substring(0,10)}}`
    };

const John = new Person("John",new Date(1998,11,10));
console.log(John.toString());

const Peter = new Person("Peter",new Date(1985,10,10));
console.log(Peter.toString());


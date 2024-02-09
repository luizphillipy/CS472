// inherience
//person supertype
const person = {
    name: null,
    dateOfBirth:null

};
//student object
const student1 = {
    cgpa:0.00
};
//student1.__proto__ = person; //inherence legacy way to do 
Object.setPrototypeOf(student1,person); //new way of 

console.log(Object.getPrototypeOf(student1));

//employee object

const employee = {
    job:null,
    salary:0.00
};
employee.__proto__ = person;
console.log(employee);

// faculty object
 const faculty = {
     specialty:null
 };
 faculty.__proto__ = person;


 const anna = Object.create(student1);
 anna.name = "Anna Smith";
 anna.dateOfBirth = new Date(1988,2,11);
 anna.cgpa = 3.55;
 console.log(anna);

 const luiz = Object.create(student1,{
     name: {
         writable:true,
         configurable:true,
         enumerable:true,
         value: "Luiz Sampaio"
     },
     cgpa: {
         value:3.90
     }
 });
 console.log(luiz);

 //======================================= Contruction function
function sum(a,b){
    return a+b;
}

// function Animal(name){
//     this.name = name;
// }
// const Animal_rabit = new Animal("rabitt");
// const Animal_cat = new Animal("Cat");
// Animal("Dog");

//====================
//Using the obj.prototype property and CF and "new" operator

const animal = {
    eats:true
}
function Rabitt(name) {
    this.name = name;
}
Rabitt.prototype = animal;
let rabitt = new Rabitt("WhiteRabitt");
console.log(rabitt.__proto__);
console.log(rabitt.eats);


function Person(){
    this.university="MIU";
    this.year=2016;
}
const faculty1 = new Person();
Person.prototype.greet = function(name){
    return "HI, "+name+", you teach in "+this.university;
}
console.log(faculty1.greet("Luiz"));

/**
 * App.js ES classes and ESModules
 * String template Literals
 */
const topicName = " ES Classes and ESModule";
console.log(`Welcome to ${topicName}`);
console.log("Hello "+topicName);

class User{
    constructor(name){
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, ${this.name}`);

    }
}
const userJohn = new User("John");
userJohn.sayHello();
console.log(typeof User);
console.log(userJohn instanceof User);
console.log(userJohn);
//Student  class with getter/setter prototype methods

class Student {
    constructor(studentId, name, admissionDate, cgpa){
        this.studentId = studentId;
        this.name=name;
        this.admissionDate = admissionDate;
        this.cgpa = cgpa;
    }
    // gettters and setters
    get studentId(){
        return this._studentId;
    }
    get admissionDate(){
        return this._admissionDate;
    }
    get name(){
        return this._name;
    }
    get cgpa(){
        return this._cgpa;
    }
    set studentId(value){
        if (value==null){
            throw new Error("Invalid StudentId value")
        }
        this._studentId = value;
    }
    set name(value){
        this._name=value;
    }
    set admissionDate(value){
        this._admissionDate=value;
    }
    set cgpa(value){
        this._cgpa=value;
    }
    
}
const bob = new Student ("000-00-0001", "Bob Jones", new Date(2021,11,10), 3.70);
console.log(bob);
console.log(bob.__proto__);
Student.prototype.toString = function(){

    return `{StudentId: ${this.studentId}, Name: ${this.name}, Admission: ${this.admissionDate}, cGPA: ${this.cgpa}}`;
    
    }
console.log(bob.toString());

// Defining Getters and Setters using getXXX and setXXX 
//And also using privates variables
class Person{
    #name = null;
    #dateOfBirth = null;

    constructor(name, dateOfBirth){
        this.#name=name;
        this.#dateOfBirth=dateOfBirth;
    }
    //Getters
    getName(){return this.#name};
    getDateOfBirth(){return this.#dateOfBirth};

    //Setters
    setName(name){
        this.#name=name;
    }
    setDateOfBirtth(dateOfBirth){
        this.#dateOfBirth = dateOfBirth
    }
    toString() {
        return `{Name: ${this.#name}, DateOfBirth: ${this.#dateOfBirth}}`
    }
}
const anna = new Person("Anna Smith", new Date(1988,2,15));
console.log(anna.toString());
anna.setName("Anna Lynn Smith");
console.log(anna.name);
console.log(anna.getName());
console.log(anna.toString());

//Implementing Inheritance using  the 'extends' keyword

class Animal {
    constructor(name){
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}
class Dog extends Animal {
    constructor(name, collarColor){
        super(name);
        this.collarColor = collarColor;
    }
    speak(){
        console.log(`${this.name} barks and has a ${this.collarColor}`);
    }
}
let d = new Dog("Mitzie", "red");
d.speak();

//Polymorphism in JS
class Shape {
    area() {
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;

    }

}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI*this.radius**2;
    }
}
class Retangle extends Shape {
    constructor(width, length){
        super();
        this.length=length;
        this.width=width;
    }
    area(){
        return this.length*this.width;
    }
}
class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base=base;
        this.height=height;
    }
    area(){
        return this.base*this.height/2;
    }
}
function calcSumOfAreas(shapes){
    return shapes.reduce((sum, shape)=> {
        if(shape instanceof Shape) {
            console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`)
            return null;
    }
    });}



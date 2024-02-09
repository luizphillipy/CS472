/**
 * 2.	Given that an Employee IS-A person, applying JavaScript inheritance and the 
 * Object.create(…) method, create a generic object named, employee, with the following 
 * properties:
a.	Salary (initialize this with the value zero dollars
b.	hireDate (initialize this with the current date of today)
and the following method:
c.	doJob (should take as input parameter, a string representing the jobTitle of the employee 
    and it prints-out to the console, the employee’s information in the following format:

“[Employee’s name] is a [jobTitle] who earns $[salary]”
e.g. Anna is a Programmer who earns $249,995.50 

Create an employee named, Anna, set their salary to $249.995.50 and call the doJob() method, 
passing it the jobtitle, Programmer.

Note the console output should be: Anna is a Programmer who earns $249,995.50

 */
"use strict"
let dollarUSLocale = Intl.NumberFormat('en-US');
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
//employee object
const employee = {
    hireDate:new Date(), 
    salary:0.00,

    doJob:function(jobTitle){
        return console.log(this.getName()+" is a "+jobTitle+" who earns $"+dollarUSLocale.format(this.salary));
    }

};
// employee IS-A Person
Object.setPrototypeOf(employee,person); 
const Anna = Object.create(employee,{
    name:{
        value:"Anna"
    },
    salary: {
        value:249995.50
    }
});
Anna.doJob("Programmer");
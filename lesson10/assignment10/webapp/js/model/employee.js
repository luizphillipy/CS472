/**
 * 2.	Given that an Employee IS-A person, applying JavaScript inheritance and the ES6 class 
 * syntax, define a sub-class named, Employee, in an employee.js source file, inside your model 
 * sub-sub-folder, which inherits from Person class and adds the following properties:
a.	Salary 
b.	hireDate 
and the following method:
c.	doJob (should take as input parameter, a string representing the jobTitle of the employee 
    and it prints-out to the console, the employee’s information in the following format:

“[Employee’s name] is a [jobTitle] who earns $[salary]”
e.g. Anna is a Programmer who earns $249,995.50 

In the main.js file, add code to Create an employee named, Jim Hanson, set their salary 
to $245.990.00 and call the doJob() method, passing it the jobtitle, Software Engineer.

Note the console output should be: Jim Hanson is a Software Engineer who earns $245,990.00

 */
import { Person } from "./person.js";
export class Employee extends Person{
    #salary = 0.0;
    #hireDate = null;

    constructor(name,salary, hireDate){
        super(name);
        this.#salary = salary;
        this.#hireDate=hireDate;

    }
    //Getters
    getSalary() {return this.#salary};
    getHireDate() {return this.#hireDate};

    //Setters
    setSalary(newSalary){
        this.salary=newSalary;
    }
    setHiredate(newHireDate){
        this.hireDate=newHireDate;
    }
    doJob(jobTitle){
        let dollarUSLocale = Intl.NumberFormat('en-US');
        return console.log(`${this.getName()} is a ${jobTitle} who earns $${dollarUSLocale.format(this.getSalary())}`);
    }
}
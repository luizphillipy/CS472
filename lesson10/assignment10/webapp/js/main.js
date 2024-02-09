/**
 * Inside the js sub-folder of your webapp folder, create another JS source file named, main.js.
 *  In the main.js file, write code to import your Person class. Then declare and initialize 
 * an array of Persons, with he following data:

1.	Name: Ana Smith, Date of Birth: 1998-12-15
2.	Name: Bob Jone, Date of Birth: 1945-11-16
3.	Name: Carlos Slim Helu, Date of Birth: 1976-09-24

Iterate through the array and Print-out to the console, the information about the persons using the toString() method you defined.

 */

"use strict"
import { Person } from "./model/person.js ";
import { Employee } from "./model/employee.js";
const person = [
    new Person("Ana Smith", new Date(1998,11,15)),
    new Person("Bob Jone",new Date(1945,10,16)),
    new Person("Carlos Slim Helu", new Date(1976,8,24))  
];
person.forEach(p => console.log(p.toString()));
/**
 * In the main.js file, add code to Create an employee named, Jim Hanson, set their salary 
to $245.990.00 and call the doJob() method, passing it the jobtitle, Software Engineer.

Note the console output should be: Jim Hanson is a Software Engineer who earns $245,990.00
 */
const emp = new Employee("Jim Hanson",245990.01,new Date());
emp.doJob("Software Engineer ");



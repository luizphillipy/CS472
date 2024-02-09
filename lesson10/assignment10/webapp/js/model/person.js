/**
 * Person.js
 * Inside the js sub-folder of your webapp folder, create another JS source file named, main.js. In the main.js file, write code to import your Person class. Then declare and initialize an array of Persons, with he following data:

1.	Name: Ana Smith, Date of Birth: 1998-12-15
2.	Name: Bob Jone, Date of Birth: 1945-11-16
3.	Name: Carlos Slim Helu, Date of Birth: 1976-09-24

Iterate through the array and Print-out to the console, the information about the persons using the toString() method you defined.

 */
"use strict"
  export class Person{
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
        return `{Name: ${this.getName()}, DateOfBirth: ${this.getDateOfBirth().toISOString().substring(0,10)}}`
    }
}

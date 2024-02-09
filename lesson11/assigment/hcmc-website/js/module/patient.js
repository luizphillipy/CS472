/**
 * Patient.js
 * @author Luiz Sampaio
 * @since 2022-03-10
 */
export class Patient {
    #firstName = null;
    #patientIdNumber=null;
    #lastName=null;
    #dateOfBirth=null;
    #middleInitials=null;
    #radioIsOutPatient=null;
    #ddlDepartment=null;
    //constructor
    constructor(patientIdNumber,firstName,middleInitials, lastName, dateOfBirth,radioIsOutPatient,ddlDepartment){
        this.#firstName=firstName;
        this.#patientIdNumber=patientIdNumber;
        this.#middleInitials=middleInitials;
        this.#lastName=lastName;
        this.#dateOfBirth=dateOfBirth;
        this.#radioIsOutPatient=radioIsOutPatient;
        this.#ddlDepartment=ddlDepartment;
    }
    getFirstName(){return this.#firstName};
    getLastName() {return this.#lastName};
    getPatientIdNumber(){return this.#patientIdNumber};
    getDateOfBirth(){return this.#dateOfBirth};
    getMiddleInitials(){return this.#middleInitials};
    getRadioIsOutPatient(){return this.#radioIsOutPatient};
    getDdlDepartment(){return this.#ddlDepartment};

}
/**
 * patient.js
 */
 "use strict"


 
 function Patient(patientId, patientNumber, fullNames, emailAddress,contatPhoneNumber,dateOfBirth){
     this.patientId=patientId;
     this.patientNumber=patientNumber;
     this.fullNames=fullNames;
     this.emailAddress=emailAddress;
     this.contatPhoneNumber=contatPhoneNumber;
     this.dateOfBirth=dateOfBirth;
 }
 module.exports = Patient;
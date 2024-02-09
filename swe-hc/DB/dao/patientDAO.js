/**
 * product DAO.js
 */
 "use strict";
 const dbConnectionMgr = require("./dbconnectionmgr");
 //const Product = require("../../model/product")
 // TODO USE ES6 class syntax
 
 const patientDAO = (function(){
 
 
 /**
  * Fetches and resutrns all available patients in the data base */
 
 const getPatients = async function(){ //async is to run this function asyncronnouslly
     const qryStrGetPatients = "SELECT * FROM `patients-db`.patients";
     try {
         const dbConnection =dbConnectionMgr.getConnextion();
         const [patients] = await dbConnection.promise().query(qryStrGetPatients);
         return patients; //
     } catch (err) {
         console.log(`DB Access Error: ${err}`);
         throw err;
     }
 };
//  const savePatients = async function(product){
//      const cmdStrSavePatients = INSERT INTO `patients-db`.`patients` (`patientNumber`, `isAnOutPatient`, `fullNames`, `emailAddress`, `contactPhoneNumber`, `dateOfBirth`) VALUES (' P1000001', '0', 'Luiz Phillipy Moreira Sampaio', 'lsampaio@miu.edu', '(641)233-0921', '1979-11-05');
//      try {
//          const dbConnection = dbConnectionMgr.getConnextion();
//          const saveOpResult = await dbConnection.promise().execute(cmdStrSaveProduct);
//          return saveOpResult;
//      } catch (error) {
//          console.log(`DB Access Error: ${error}`);
//          throw error
         
//      }
//  }
 return {
    getPatients:getPatients
 }
 }) ();
 module.exports = patientDAO;
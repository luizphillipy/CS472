/**
 * patientController.js
 */
 "use strict";

 const patientsDAO = require("../DB/dao/patientDAO");
 // const Patient = require("../model/patient");
 
 
 const patientController = (function(){
 
     const getPatients = async function(req,res) {
         try {
             const patients = await patientsDAO.getPatients();
             console.log(`Controller: Patients list: ${patients}`);
             return patients;
         } catch (error) {
             res.status(500);
             res.render("50x",{error: error});
         }
     };
 
    //  const addNewPatient = async function(req, res){
    //      const patient = new Patient(null, parseInt(req.body.produc), req.body.productName, parseFloat(req.body.unitPrice));
    //      try {
    //          const opRes = await patientsDAO.savePatient(patient);
    //          console.log(`PatientController: Save Patient output: ${opRes}`)
    //          return opRes;
    //      } catch (error) {
    //          res.status(500);
    //          res.render("50x",{error:error})
    //      }
    //  }
     return {
        getPatients:getPatients
       // addNewPatient:addNewPatient
     }
 })();
 module.exports = patientController;
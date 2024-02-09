/**
 * Application to pick-up all data from a form using JS and create new table entry with the data collected
 * @author Luiz Sampaio
 * @since 2022-03-10
 */
 //Method 3: using JQuery
 "use strict"
 import {Patient} from "./module/patient.js";
 $(document).ready(function() {
     console.log("mainApp.js loaded successfully via JQuery")
     const patientData = [];
     $("#formNewPatient").submit(function(event){
         event.preventDefault();
         const patientIdNumber = $("#patientIdNumber").val();
         const firstName = $("#firstName").val();
         const middleInitials = $("#middleInitials").val();
         const lastName = $("#lastName").val();
         const dateOfBirth = $("#dateOfBirth").val();
         const radioIsOutPatient= $("input[name=radioIsOutPatient]:checked").val();
         const ddlDepartment = $("#ddlDepartment option:selected").val();
         //const chkElderlyPatients = $("input[name=chkElderlyPatients]:checked").val();
         //const chkShowOutPatients = $("input[name=chkShowOutPatients]:checked").val();

        //console.log(`Patient Number: ${patientIdNumber}\nFirstName: ${firstName}\nMiddleInitials: ${middleInitials}\nLastName: ${lastName}\nDate of Birth: ${dateOfBirth}\nOut Patient: ${radioIsOutPatient}\nDepartment: ${ddlDepartment}`);

        // const accountData = `Account No: ${accountNo}\nCustomer Name: ${customerName}\nAccount Type: ${accountType}`;
       //  alert(accountData);
        const newPatient = new Patient(patientIdNumber,firstName,middleInitials, lastName, dateOfBirth,radioIsOutPatient,ddlDepartment);
        patientData.push(newPatient);
        createPatient(newPatient);
        resetInputs();
 
     })
     $('input[name=chkElderlyPatients]').change(function() {
        if ($(this).is(':checked')) {
          $("#tbodyPatientsList").empty();
            const elderlyPatients=patientData.filter(p=>{
              console.log(2022 - parseInt(p.getDateOfBirth().toString().substring(0, 4)));
              //put comparison with year, month and day... not only the year
              return 2022 - parseInt(p.getDateOfBirth().toString().substring(0, 4)) >= 65;
          } ).forEach(p=> createPatient(p));
          console.log(elderlyPatients);
        } else {
          
        }
      });
      function checkElderly(patientEld){
          const today= new Date()
        if (patientEld.getDateOfBirth().toString().substring(0,4)-today.toString().substring(0,4)==0){
            if (patientEld.getDateOfBirth().toString().substring(5,7)-today.toString().substring(5,7)==0){
                if(patientEld.getDateOfBirth().toString().substring(8,10)-today.toString().substring(8,10)){
                   createPatient(patientEld) 
                }
            }
        }
            
      }
     function createPatient(newPatient){
         
         const tblPatients = document.querySelector("#tbodyPatientsList");
         const newRow = tblPatients.insertRow(-1);
         const newCellPatientIdNo = newRow.insertCell(0);
         const srtNewRowPatientIdNo = document.createTextNode(`${newPatient.getPatientIdNumber()}`);
         newCellPatientIdNo.appendChild(srtNewRowPatientIdNo);
 
         const newCellFirstName = newRow.insertCell(1);
         const srtNewRowFirstName = document.createTextNode(`${newPatient.getFirstName()}`);
         newCellFirstName.appendChild(srtNewRowFirstName);

         const newCellMiddleInitials = newRow.insertCell(2);
         const srtNewRowMiddleInitials = document.createTextNode(`${newPatient.getMiddleInitials()}`);
         newCellMiddleInitials.appendChild(srtNewRowMiddleInitials);

         const newCellLastName = newRow.insertCell(3);
         const srtNewRowLastName = document.createTextNode(`${newPatient.getLastName()}`);
         newCellLastName.appendChild(srtNewRowLastName);
 
         const newCellDateOfBirth = newRow.insertCell(4);
         const srtNewRowDateOfBirth = document.createTextNode(`${newPatient.getDateOfBirth()}`);
         newCellDateOfBirth.appendChild(srtNewRowDateOfBirth);

         const newCellDdlDepartment = newRow.insertCell(5);
         const srtNewRowDdlDepartment = document.createTextNode(`${newPatient.getDdlDepartment()}`);
         newCellDdlDepartment.appendChild(srtNewRowDdlDepartment);

         const newCellRadioIsOutPatient = newRow.insertCell(6);
         const srtNewRowRadioIsOutPatient = document.createTextNode(`${newPatient.getRadioIsOutPatient()}`);
         newCellRadioIsOutPatient.appendChild(srtNewRowRadioIsOutPatient);

         
         
     }
     function resetInputs(){
        $("#firstName").val("");
        $("#lastName").val("");
        $("#patientIdNumber").val("");
        $("#middleInitials").val("");
        $("#dateOfBirth").val("");
        $("#ddlDepartment").val("");
    }
 
 })
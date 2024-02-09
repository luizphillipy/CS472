
const censusForm = document.getElementById("census-form");
censusForm.addEventListener("submit",printFormData);
function printFormData(event){
    const name = document.getElementById("name");
    const citizenId = document.getElementById("citizenId");
    const ssn = document.getElementById("ssn");
    const state= document.getElementById("state");
    const citizenSenior = document.querySelector('input[name="citizenSenior"]:checked');
    var msg="";
    var newLine = "\r\n"
    msg+="Citizen Id:"+citizenId.value;
    msg+=newLine
    msg+="SSN: "+ssn.value;
    msg+=newLine;
    msg+="Full Name: "+name.value;
    msg+=newLine;
    msg+="State: "+state.value;
    msg+=newLine;
    msg+="Senior: "+citizenSenior.id;
    alert(msg);
 
    
}
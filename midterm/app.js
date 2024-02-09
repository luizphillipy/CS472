const censusForm = document.getElementById("census-form");
censusForm.addEventListener("submit",printFormData);
function printFormData(event){
    event.preventDefault();
    const name = document.getElementById("name");
    const citizenId = document.getElementById("citizenId");
    const ssn = document.getElementById("ssn");
    const state= document.getElementById("state");
    const citizenSenior = document.querySelector('input[name="citizenSenior"]:checked');
    console.log(name.value);
    console.log(citizenId.value);
    console.log(ssn.value);
    console.log(state.value);
    console.log(citizenSenior.id);
    
}
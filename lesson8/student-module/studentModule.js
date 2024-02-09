/**
 * 
 */
const sudentModule = (function(){
    let firstName = null;
    let lastName=null;
    let cgpa=0;
    getName = function(){
        return firstName;
    };
    setName= function(newName){
        firstName = newName;
    };
    calcCGPA = function(){
        cgpa =2+1;
        return cgpa;
    };
    getCGPAPriv = function(){
        return calcCGPA();
    }
    
    return {
        getName: getName,
        setName: setName,
        getCGPA_pub: getCGPAPriv
    }
})();//IIFE

//USE Student Module

console.log(sudentModule.getName());
sudentModule.setName("Anna");
console.log(sudentModule.getName());
console.log(sudentModule.getCGPA_pub());
sudentModule.PrintName = function(){
    console.log("Student's name is "+sudentModule.getName());
}
sudentModule.PrintName();



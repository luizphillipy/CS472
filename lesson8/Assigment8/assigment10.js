// question 10 
const Employee = (function(){
    let name="";
    let age=0;
    let salary=0.0;
    const setAge= function(newAge){
        age=newAge;
    };
    const setSalary = function(newSalary){
        salary=newSalary;
    };
    const setName = function(newName){
        name=newName;
    };
    const getAge = function(){
        return age;
    };
    const getSalary = function(){
        return salary;
    };
    const getName = function(){
        return name;
    }
    const increaseSalary = function(percentage){
        let newSalary = getSalary();
        newSalary*=(1+percentage/100);
        console.log(newSalary);
        return setSalary(newSalary);
    }
    const incrementAge = function(){
        return setAge(getAge()+1);
    }
    return {
        setAge: setAge,
        setSalary: setSalary,
        setName:setName,
        increaseSalary:increaseSalary,
        incrementAge:incrementAge
        
    }
    


})();
console.log(Employee);
Employee.setAge(42);
Employee.setSalary(120000);
Employee.setName("Luiz Sampaio");
console.log(Employee);
Employee.increaseSalary(10);
Employee.incrementAge();
//console.log(Employee.getAge());



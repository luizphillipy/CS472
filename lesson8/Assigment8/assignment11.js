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
        setSalary(newSalary);
        return getSalary();
    }
    const incrementAge = function(){
        return setAge(getAge()+1);
    }
    return {
        setAge: setAge,
        getAge: getAge,
        getName:getName,
        getSalary:getSalary,
        setSalary: setSalary,
        setName:setName,
        increaseSalary:increaseSalary,
        incrementAge:incrementAge
    }
    


})();


Employee.address = "";
Employee.getAddress = function(){
    return this.address;
}
Employee.setAddress = function(newAddress){
    this.address = newAddress;
}
console.log(Employee);
Employee.setAge(42);
Employee.setSalary(120000);
Employee.setName("Luiz Sampaio");
console.log(Employee);
Employee.increaseSalary(10);
Employee.incrementAge();
console.log(Employee.salary);
console.log(Employee.age);
Employee.setAddress("1000N, 4st, building 140 MR #26");
console.log(Employee.getAddress());

//console
//define a new constructor function named EmployeeWithAdress
function EmployeeWithAddress(address){
    this.address = address;
}
EmployeeWithAddress.prototype = Employee;
EmployeeWithAddress.prototype.setAddress = function (newAddress){
    this.address = newAddress;
};
EmployeeWithAddress.prototype.getAddress = function(){
    return this.address;
}
EmployeeWithAddress.prototype.toString = function(){
    return `{EmployeeWithAddress: ${this.getName}, Age: ${this.getAge}, Salary: ${this.getSalary}, Address: ${this.getAddress}}`
}
const empWithAddr = new EmployeeWithAddress(null);
empWithAddr.setName("Asma IOS");
empWithAddr.setAge(30);
empWithAddr.setSalary(380000.00);
empWithAddr.setAddress("California");
console.log(empWithAddr.toString());
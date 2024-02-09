//way to define objects in JS
//Object literal
const work_address = {
    street: "1000 N Court Street",
    city: "New York",
    zipcode: 52558
}
const student ={
    "name": "Anna Smith",
    cgpa: 3.78,
    home_address: {
        street: "1000 N Court Street",
        city: "Fairfield",
        zipcode: 52557
    },
    phoneNumbers:["6412330921","5561992033355"],
    work_address: work_address
};



// student.work_address = work_address;
student.cgpa=4.70;
console.log("hello");
console.log(student.work_address);
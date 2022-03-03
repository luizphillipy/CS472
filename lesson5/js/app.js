console.log("Hello world!!")

var address = {
    street:"Main street",
    "house number":1000,
    apartment: {
        'floor':3,
        'number': 301
    }
}
console.log(address);
console.log(address.street);
console.log(address["house number"]);
console.log(address.apartment.floor+", "+address.apartment.number);


//-------------------------------
// Lexical enviroment
//Global env
var i = 0;
// Functional env
function sumNumbers0(numbers) {
    var sum=0;
    console.log(sum);
}


//Block env
function sumNumbers1(numbers) {
    var sum=0;
    for(let i =0;i<numbers.length;i++){
        const j= "block env"
        sum+=numbers[i];
    }
    return sum;
}
//console.log(j);
//console.log(sum);
console.log(sumNumbers1([1,2,3]));
console.log(this);
alert("hello")

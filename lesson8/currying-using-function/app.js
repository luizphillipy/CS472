function multiply(a,b){
    return a*b;

}
const r = multiply.bind(null,2)(3);
console.log(r);

function multiply(a,b,c){
    return a*b*c;
}
const multiplyByTwo = multiply.bind(null,2);
multiplyByTwo(3,4);
console.log(multiplyByTwo(3,4));

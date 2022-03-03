// anonymous function
// var btnOk= document.getElementById("btnOk");
// btnOk.onclick = function (){
//     alert("Button ok is clicked!")

//     // btnOk.onclick = () => { alert("Button ok is clicked!")}
// }

const calcSumArgs = function (){() => arguments.reduce((sum,n)=> sum+n,0)};
console.log(calcSumArgs(1,2,3));

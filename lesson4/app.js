
var mouseClick = document.getElementById("bnt-submit");
    
mouseClick.addEventListener('click',function(event){
    event.preventDefault();
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);
});





//<!-- UnObstrusive JS-->
//<!-- <script defer> // defer only works with linked script
//    function okClick() {
//        alert("Button ok is clicked");
//    }
//    var btnOk = document.getElementById("btnOk");
//    btnOk.onclick = okClick;
//</script> -->

    
    // function okClick() {
    //     alert("Button ok is clicked");
    // }
//    var btnOk = document.getElementById("btnOk");
    // btnOk.onclick = function() { // anonymous function as event handler
    //     alert("Button ok is clicked");
    // };
   // btnOk.onclick = () => { // arrow function as event handler
   //     alert("Button ok is clicked");
  //  }; 
    // btnOk.addEventListener("click", okClick);
    // btnOk.addEventListener("click", function() {
    //     alert("Button ok is clicked");
    // })
//};
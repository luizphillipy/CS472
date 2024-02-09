/**
 * 
 * App.js
 */
 "use strict"

 $("#articlesList").on("click","a", function(event) {
     event.preventDefault(); //don't want to follow the link for this example
   console.log($(this).text());
   $("#articlesList").append(`<article><p>Here is an Account - <a href="http://www.google.com">Click to Add a new Account</a></p></article>`);
 })
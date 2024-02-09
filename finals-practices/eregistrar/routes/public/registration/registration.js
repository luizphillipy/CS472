/**
 * product.js
 */
 "use strict"

 const express = require("express");
 const path = require("path");
 
 const registrationRouter = express.Router();
 const accountRouterForm = express.Router();
 const student = require("../../../model/student");
 const studentController = require("../../../controller/studentController");
 
 //define routes for account page
 
 registrationRouter.get("",(req, res, next)=>{
     console.log(`Presenting list of students...`);
     const students = studentController.getStudents(req, res);
     console.log(students);
     res.locals = {students:students};
     //product-list");
     res.render("student");
     //res.sendFile(path.join(__dirname,"../../views","account.html"))
});
 
 registrationRouter.post("", (req, res)=>{
     const result =  studentController.createNewStudent(req, res);
     res.redirect(303,"/registration")
 });
 // productRouter.get("/form", (req, res, next)=>{
     
 // })
 
 module.exports = registrationRouter;
/**
 * home.js
 */

 "use strict "
 const path = require("path");
 const express = require("express");
 const Student = require("../../model/student");
 const studentController = require("../../controller/studentController")
 const homeRouter = express.Router();
 
 //Define home page routes
 homeRouter.get("/",(req, res, next) =>{
     console.log("presenting homepage url");
     console.log(`Presenting list of students...`);
     const students = studentController.getStudents(req, res);
     console.log(students);
     res.locals = {students:students};
     //product-list");
     res.render("student");
     //res.sendFile(path.join(__dirname,"../../views","index.html"));
 });
 
 homeRouter.post("/", (req,res) =>{
     console.log("sending data to be processed...");
     const result = studentController.createNewStudent(req,res);
     res.redirect(303,"/")
    });

//  app.use("",homeRouter);

 module.exports =homeRouter;
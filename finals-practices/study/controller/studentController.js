/**
 * studentController.js  - provides the interface between UI and the studentDAO
 *
 */
 "use strict";

 const studentDAO = require("../DB/DAO/studentDAO");
 const Student = require("../model/student");

 const studentController = (function(){
 
    const getStudents = function(req,res) {
        try {
            const students = studentDAO.getStudents();
            //console.log(`Controller: Students list: ${students}`);
            return students;
        } catch (error) {
            res.status(500);
            res.render("50x",{error: error});
        }
    };

    const createNewStudent = function(req, res){
        console.log(req.body);
        const student = new Student(req.body.txtStudentId, req.body.txtFullName, req.body.txtCourse);
        console.log(req.body);
        try {
            console.log("data from form",student);
            const opRes = studentDAO.createStudent(student);
            console.log(`StudentController: Save Student output: ${opRes}`)
            return opRes;
        } catch (error) {
            res.status(500);
            res.render("50x",{error:error})
        }
    }
    return {
        getStudents:getStudents,
        createNewStudent:createNewStudent
    }
})();
module.exports = studentController;
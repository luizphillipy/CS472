/**
 * studentDAO.js - create Data Access Objects as a array of students
 */
"use strict"
const Student =require("../../model/student");

const studentDAO =(function(){
    const students=[];
        students.push(new Student(379468,"Luiz Sampaio", "CS472 - WAP"));
        students.push(new Student(379469,"Asma IOS", "CS390 - FPP"));
        students.push(new Student(379470,"Faycal Maichtbi", "CS401 - MPP"));
const getStudents = function(){
    return students;
};
const createStudent = function(student){
    students.push(new Student(student.studentId, student.studentName, student.studentCourse));

};
const wapStudents = function(){
    return students.filter(s => s.studentCourse=="CS472 - WAP");
}
return {
    getStudents:getStudents,
    createStudent:createStudent,
    wapStudents:wapStudents
}
})();
module.exports = studentDAO;
/**
 * Student.JS - model of student that has a name, a studentId and studentCourse
 * @author Luiz Sampaio
 * @since 03/16/2022
 */
 "use strict"

 function Student(studentId, studentName, studentLevel){
     this.studentId=studentId;
     this.studentName=studentName;
     this.studentLevel = studentLevel;
     
 };
 module.exports = Student;
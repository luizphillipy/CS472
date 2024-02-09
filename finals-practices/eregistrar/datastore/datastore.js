/**
 * datastore.js
 * 
 * @author 
 * @since 
 */
"use strict";
const Student =require("../model/student");

const dataStore = (function(){
    const registrationData = [];
        registrationData.push(new Student("000-11-0001","Anna Lynn Smith","Graduate"));
        registrationData.push(new Student("000-11-0002","Bob K. Jones","Undergraduate"));
     

    const getData = function() {
        return registrationData;
    }

    const createStudent = function(student){
        registrationData.push(new Student(student.studentId, student.studentName, student.studentLevel));
    
    };
    return {
        getData: getData,
        createStudent:createStudent
    }
})();

module.exports = dataStore;
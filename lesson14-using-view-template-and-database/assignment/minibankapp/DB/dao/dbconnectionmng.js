/**
 * dbConnectionMgr.js
 */
 "use strict"
 const mysql = require("mysql2");
 const dbConfig = require("./dbconfig");
 
 const dbConnectionMgr = (function(dbconfig){
 
     /**
      * makes and returns a Database Connection Pool using the given config
      */
 const getConnection = function(){
     return mysql.createPool(dbConfig);
 }
  return {
     getConnection: getConnection
 }
 
 })(dbConfig)
 module.exports = dbConnectionMgr
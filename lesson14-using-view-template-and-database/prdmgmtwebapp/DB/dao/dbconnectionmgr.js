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
const getConnextion = function(){
    return mysql.createPool(dbConfig);
}
 return {
    getConnextion: getConnextion
}

})(dbConfig)
module.exports = dbConnectionMgr
/**
 * account DAO.js
 */
 "use strict";
 const { get } = require("../../routes/account/account");
 // const { getProducts } = require("../../Controller/productController");
 const dbConnectionMgr = require("../dao/dbconnectionmng");
 //const Product = require("../../model/product")
 // TODO USE ES6 class syntax
 
 const accountDAO = (function(){
 //     const getProducts = function(){
 //         const products=[];
 //         products.push(new Product(1001, "Apple Iphone15",1700));
 //         products.push(new Product(1003, "Samsung Android S22",1500));
 //         products.push(new Product(1004, "Google Pixel 11",1200));
 //         return products;
 //     }
 //     return{
 //         getProducts :getProducts
 //     }
 
 /**
  * Fetches and resutrns all available products in the data base */
 
 const getAccounts = async function(){ //async is to run this function asyncronnouslly
     const qryStrGetAccounts = "SELECT * FROM `accounts-db`.accounts";
     
     try {
         const dbConnection =dbConnectionMgr.getConnection();
         const [accounts] = await dbConnection.promise().query(qryStrGetAccounts);
         console.log(accounts);
         return accounts; //
         
     } catch (err) {
         console.log(`DB Access Error: ${err}`);
         throw err;
     }
 };
 const saveAccount = async function(account){
     console.log("saveaccount");
     const value = `\'${account.accountNo}\'`;
     const values = `'${account.accountNo}', '${account.customerName}', '${account.accountType}'`;
     const cmdStrSaveAccount = "INSERT INTO `accounts-db`.`accounts` (accountNo, customerName, accountType) VALUES (" + values + ")";
     //INSERT INTO `accounts-db`.`accounts` (`accountNo`, `customerName`, `accountType`) VALUES ('001-111-1111', 'asma', 'savings');
     try {
         const dbConnection = await dbConnectionMgr.getConnection();
         const saveOpResult = await dbConnection.promise().query(cmdStrSaveAccount);
         console.log("return from the database...", saveOpResult);
         return saveOpResult;
     } catch (error) {
         console.log(`DB Access Error: ${error}`);
         throw error;
         
     }
 }
 return {
     getAccounts:getAccounts,
     saveAccount:saveAccount
 }
 }) ();
 module.exports = accountDAO;

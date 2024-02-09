/**
 * account DAO.js
 */
 "use strict";
  const Account = require("../../model/account");
 
 // TODO USE ES6 class syntax
 
 const accountDAO = (function(){
    const accounts=[];
            accounts.push(new Account(null,"001-123-1234", "Luiz Sampaio","Savings"));
            accounts.push(new Account(null,"001-123-1235", "Faycal Maichtbi","Loan"));
            accounts.push(new Account(null,"001-123-1236", "Asma IOS","Checking"));
           
 //     
 /**
  * Fetches and resutrns all available products in the data base */
 
 const getAccounts = function(){ //async is to run this function asyncronnouslly
        
         return accounts; //
         
    
 };
 const saveAccount = async function(account){

    accounts.push(new Account(null, account.accountNo, account.customerName, account.accountType));
     
 }
 return {
     getAccounts:getAccounts,
     saveAccount:saveAccount
 }
 }) ();
 module.exports = accountDAO;

/**
 * account.js
 */
 "use strict"

 //todo: use ES6 class syntax
          
 
 function Account(accountId, accountNo, customerName, accountType){
    this.accountNo = accountNo;
    this.customerName=customerName;
    this.accountType=accountType;
    this.accountId=accountId;
 }
 module.exports = Account;
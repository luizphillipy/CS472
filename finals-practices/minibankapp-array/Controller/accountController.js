/**
 * accountController.js
 */
 "use strict";

 const accountDAO = require("../DB/dao/accountDAO");
 const Account = require("../model/account");

 
 const accountController = (function(){
 
     const getAccounts = function(req,res) {
         try {
             const accounts = accountDAO.getAccounts();
             console.log(`Controller: Accounts list: ${accounts}`);
             return accounts;
         } catch (error) {
             res.status(500);
             res.render("50x",{error: error});
         }
     };
 
     const addNewAccount = function(req, res){
         const account = new Account(null,req.body.txtAccountNo, req.body.txtCustomerName, req.body.ddlAccountType);
         try {
             console.log("data from form",account);
             const opRes = accountDAO.saveAccount(account);
             console.log(`AccountController: Save Account output: ${opRes}`)
             return opRes;
         } catch (error) {
             res.status(500);
             res.render("50x",{error:error})
         }
     }
     return {
         getAccounts: getAccounts,
         addNewAccount:addNewAccount
     }
 })();
 module.exports = accountController;
/**
 * product.js
 */
 "use strict"

 const express = require("express");
 const path = require("path");
 
 const accountRouter = express.Router();
 const accountRouterForm = express.Router();
 const account = require("../../model/account");
 const accountController = require("../../Controller/accountController");
 
 //define routes for account page
 
 accountRouter.get("/list",async (req, res, next)=>{
     console.log(`Presenting list of accounts...`);
     const accounts = await accountController.getAccounts(req, res);
     console.log(accounts);
     res.locals = {accounts:accounts};
     //product-list");
     res.render("account");
     //res.sendFile(path.join(__dirname,"../../views","account.html"))
});
 
 accountRouter.post("/list", async (req, res)=>{
     console.log("asdasdasd");
     const result = await accountController.addNewAccount(req, res);
     res.redirect(303,"/account/list")
 });
 // productRouter.get("/form", (req, res, next)=>{
     
 // })
 
 module.exports = accountRouter;
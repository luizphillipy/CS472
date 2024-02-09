/**
 * home.js
 */

"use strict "
const path = require("path");
const express = require("express");
const homeRouter = express.Router();

//Define home page routes
homeRouter.get("/",(req, res, next) =>{
    console.log("presenting homepage url");
    res.sendFile(path.join(__dirname,"../../views","index.html"));
});

homeRouter.get("/home",(req, res, next) =>{
    console.log("presenting homepage url");
    res.sendFile(path.join(__dirname,"../../views","index.html"));
});

module.exports =homeRouter;
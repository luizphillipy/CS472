/**
 * home.js
 */

"use strict "
const express = require("express");
const homeRouter = express.Router();

//Define home page routes
homeRouter.get("/",(req, res, next) =>{
    console.log("redirecting to the static homepage url");
    res.redirect("/static/html/index.html")
});

homeRouter.get("/home",(req, res, next) =>{
    console.log("redirecting to the static homepage url");
    res.redirect("/static/html/index.html")
});

module.exports =homeRouter;
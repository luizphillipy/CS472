/**
 * server.js
 * 
 * @author Luiz Sampaio
 * @since 03-17-2022
 */
"use strict";

const express = require("express");
const path = require("path");
const homepageRoutes = require("./routes/public/home/index");
const registrationRouter = require("./routes/public/registration/registration");

const app = express();

// Define middlewares

// Setup the views folder and the view template engine middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));

// Set static-assets folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "static-assets")));

// Setup routes for homepage
app.use("", homepageRoutes);
app.use("/registration",registrationRouter);

// Setup routes for product-related pages
// app.use("/registration", registrationRoutes);

// middleware for PageNotFound Error 404 
app.use((req, res) => {
    console.log(`Responding with the 404 Error page`);
    res.status(404);
    res.sendFile(path.join(__dirname, "views/public/error", "404.html"));
});

const PORT_NUMBER = 9090;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});
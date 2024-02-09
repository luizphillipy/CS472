/**
 * index.js - application server side to provide all the resources to the webapp in expres.JS
 */
"use strict"
const express = require("express"); //requires the use of the module express
const path = require("path"); //requires use of module path to provide static resources
const homeRouter = require("./routes/home/home"); //route to provide home

const app = express();

// Define middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));


// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "public")));
//Setup route for static pages

app.use("",homeRouter);
// Put the Error 404 middleware last
app.use((req, res, next) => {
  //  console.log(`Responding by redirecting to the 404 Error page`);
    res.status(404).redirect(303, "/static/html/404.html");
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT_NUMBER = 8000;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});
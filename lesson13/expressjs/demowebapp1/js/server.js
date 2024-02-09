/**
 * server.js in express
 */
const express = require ("express");
const app = express();
app.use("/", (req, res, next) =>{
    console.log("Serving homepage content...");
    homepageContent=`
    <!doctype html>
    <html lang='en'>
        <head>
            <title> My First Express WebApp</title>
        </head>
        <body>
            <h1>Welcome to my first Express Webapp</h1>
        </body>
    </html>            `;
    res.send(homepageContent);
})
const port=3000;
app.listen(port, ()=>{
    console.log(`Webserver Started on ${port}`)
} );

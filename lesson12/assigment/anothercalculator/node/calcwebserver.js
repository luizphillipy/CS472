/**
 * 
 */

 const express = require ("express");
 const app = express();
 app.use(express.urlencoded({extended: true}));//use the data from URL
 app.use((req, res, next) => {
    console.log(`This middleware is always run`);
    next();
});
 app.get("/", (req, res, next) =>{
     console.log("Serving Caculator webserver...");
     homepageContent=`
     <!doctype html>
     <html lang='en'>
         <head>
             <title> My First Express WebApp</title>
         </head>
         <body>
         <h1>Simple Adder WebPage - Additional Form</h1>
         <div><form action="/" method="POST">
             <div> Enter two numbers
                 <input type="text" name="first"/>
                 <input type="text" name="second"/>
             </div>
             <div>
             <select name="operation" id="operation ">Select the operation
                <option value="add">Add</option>
                <option value="sub">Subtraction</option>
                <option value="mult">multiply</option>
                <option value="div">division</option>
            </select>
            </div>
             <div>
                 <input type="submit" value="click here to calculate!">
             </div>
         </form></div>
         </body>
     </html>            `;
     res.send(homepageContent);
    //  res.end();
    next();
 });
 //this a router to form submission
 app.post('/',(req, res, next)=>{
     let result=null;
     console.log(req.body);
     console.log("imprime o que estava no body");
     const first = parseFloat(req.body.first);//every thing that comes from browser is string
     const second = parseFloat(req.body.second);
     if(req.body.operation=='add'){
         console.log("entrou na soma");
         console.log(req.body.first);
         console.log(req.body.second);
         result = parseFloat(req.body.first)+parseFloat(req.body.second);
         console.log(result);
         
     }else if(req.body.operation=='sub'){
        console.log("entrou na subtracao");
        result = parseFloat(req.body.first)-parseFloat(req.body.second);
        console.log(result);
     }else if(req.body.operation=='mult'){
        console.log("entrou na multiplicacao");
        result = parseFloat(req.body.first)*parseFloat(req.body.second);
        console.log(result); 
     }else if(req.body.operation=='div'){
        console.log("entrou na divisao");
        result = parseFloat(req.body.first)/parseFloat(req.body.second);
        console.log(result);
     }
     //res.writeHead(200, {"Content-Type":"text/html"});
     res.redirect(303, `/result?result=${result}`);//
    //  res.write();
    //  res.end();
    next();
 });
 app.get("/result",(req, res)=>{
     
    const resultPage = `
    <!DOCTYPE html
   <html>
       <head>
           <title>Another Calculator webapp</title>
       </head>
       <body>
       <h1>The result of the  ${req.query.result}</h1>
       
       </body>
   </html>
    `;
    res.send(resultPage);
    res.end();
 })
 const port=3000;
 app.listen(port, ()=>{
     console.log(`Webserver Started on ${port}`)
 } );
 
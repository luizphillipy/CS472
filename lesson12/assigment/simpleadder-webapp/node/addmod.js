/**
 * 
 */
exports.add = function(req, res, vals){
    const operationField=vals.operation;
    if (operationField=="Add"){
        const operation = parseFloat(vals.first)+parseFloat(vals.second);
    res.writeHead(200, {"Content-Type":"text/html"});
    const content = `
    <!DOCTYPE html
    <html>
        <head>
            <title>Calculator webapp</title>
        </head>
        <body>
            <p> The result of the adition is: ${String(operation)}</p>
        </body>
    </html>`
    res.write(content);
    res.end();
    } else if(operationField=="sub"){
        const operation = parseFloat(vals.first)-parseFloat(vals.second);
    res.writeHead(200, {"Content-Type":"text/html"});
    const content = `
    <!DOCTYPE html
    <html>
        <head>
            <title>Calculator webapp</title>
        </head>
        <body>
            <p> The result of the substratction is: ${String(operation)}</p>
        </body>
    </html>`
    res.write(content);
    res.end();
    } else if(operationField=="multi") {
        const operation = parseFloat(vals.first)*parseFloat(vals.second);
    res.writeHead(200, {"Content-Type":"text/html"});
    const content = `
    <!DOCTYPE html
    <html>
        <head>
            <title>Calculator webapp</title>
        </head>
        <body>
            <p> The result of the multiplication is: ${String(operation)}</p>
        </body>
    </html>`
    res.write(content);
    res.end();
    }else if (operationField=="division"){
        const operation = parseFloat(vals.first)/parseFloat(vals.second);
    res.writeHead(200, {"Content-Type":"text/html"});
    const content = `
    <!DOCTYPE html
    <html>
        <head>
            <title>Calculator webapp</title>
        </head>
        <body>
            <p> The result of the division is: ${String(operation)}</p>
        </body>
    </html>`
    res.write(content);
    res.end();
    }
    
}
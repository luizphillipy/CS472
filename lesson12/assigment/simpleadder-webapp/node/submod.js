exports.subs = function(req, res, vals){
    const operation = parseFloat(vals.first)-parseFloat(vals.second);
    res.writeHead(200, {"Content-Type":"text/html"});
    const content = `
    <!DOCTYPE html
    <html>
        <head>
            <title>Calculator webapp</title>
        </head>
        <body>
            <p> The result of the substration is: ${String(operation)}</p>
        </body>
    </html>`
    res.write(content);
    res.end();
}
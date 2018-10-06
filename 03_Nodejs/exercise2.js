const http = require('http');
const fs = require('fs');
const path = require('path');

/***********************************/
// Synchronous call with buffering //
/***********************************/
/*
http.createServer((req, res) => {
    let data = fs.readFileSync(path.join(__dirname, 'data.zip'));
    res.end(data);
}).listen(4000);
*/

/***********************************/
//Asynchronous call with buffering //
/***********************************/
/*
http.createServer((req, res) => {
    fs.readFile('./data.zip', (err, data)=> {
        res.writeHead(200, {'Content-Type': 'application/zip'});
        res.end(data);
    })
}).listen(4000);
*/

/***********************************/
// Asynchronous call with chunks   //
/***********************************/

http.createServer((req, res) => {
    let readable = fs.createReadStream(path.join(__dirname, 'data.zip'), 
        {encoding: 'utf-8', highWaterMark: 16*1024});
    readable.pipe(res);
}).listen(4000);

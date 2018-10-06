const http = require('http');
const url = require('url');
const { fork } = require('child_process');

http.createServer((req, res) => {
    const url_obj = url.parse(req.url, true);
    const child_process = fork('child_process', [url_obj.query.url]);
    child_process.send('start');
    child_process.on('message', data => {
        res.end(data);
    });
}).listen(4000);

//link: http://localhost:4000/?url=./data.txt
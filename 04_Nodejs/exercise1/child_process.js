const fs = require('fs');

process.on('message', () => {
    const path = process.argv[2];
    let data = "";
    let readable = fs.createReadStream(path, {encoding: 'utf-8', highWaterMark: 16*1024});
    readable.on('data', (chunk) => { data += chunk });
    readable.on('end', () => { process.send(data) });
});

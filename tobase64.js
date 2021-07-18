
const fs = require('fs');
const path = process.argv[2];
fs.readFile(path, (err, resp) => console.log(resp.toString('base64')));

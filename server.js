const http = require('http');  // package imported  http
const app = require('./app'); // imported app.js

const port = process.env.PORT || 3000;   // setting up the port and default port is 3000

const server = http.createServer(app);

server.listen(port);


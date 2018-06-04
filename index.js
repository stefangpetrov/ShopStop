const http = require('http');
const port = 3000;
const handlers = require('./handlers');

let enviorment = process.env.Node_ENV || 'development';
const config = require('./config/config');
const database = require('./config/database.config');

database(config[enviorment]);

http.createServer((req, res) => {

    for(let handler of handlers){
        if(!handler(req, res)){
            break;
        }
    }
}).listen(port);

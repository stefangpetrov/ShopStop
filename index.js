const port = 3000;
const config = require('./config/config');
const database = require('./config/database.config');
const express = require('express');

let app = express();
let enviorment = process.env.Node_ENV || 'development';

database(config[enviorment]);
require('./config/express')(app, config[enviorment]);
require('./config/routes')(app);

require('./config/passport')();

app.listen(port);
console.log('slusham');

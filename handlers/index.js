const homeHandler = require('./home.js');
const filesHandler = require('./static-files.js');
const productsHandler = require('./product.js');

module.exports = [ homeHandler, filesHandler, productsHandler ];
const homeHandler = require('./home.js');
const filesHandler = require('./static-files.js');
const productsHandler = require('./product.js');
const categoryHandler = require('./category');

module.exports = [ homeHandler, filesHandler, productsHandler, categoryHandler ];
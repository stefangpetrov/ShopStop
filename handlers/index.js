const homeHandler = require('./home.js');
const productsHandler = require('./product.js');
const categoryHandler = require('./category');

module.exports = { home:homeHandler, product:productsHandler, category:categoryHandler };
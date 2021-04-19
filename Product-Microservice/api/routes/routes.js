'use strict';

module.exports = function(app) {
    var productList = require('../controllers/controller');

    app
    .route("/rest/v1/products")
    .get(productList.displayProducts)
    .post(productList.createProduct);

    app
    .route("/rest/v1/products/:id")
    .put(productList.updateProduct)
    .delete(productList.deleteProduct);
};

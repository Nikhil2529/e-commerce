'use strict';

module.exports = function(app) {
    var usersList = require('../controllers/controller');

    app
    .route("/rest/v1/users")
    .post(usersList.createUser)

    app
    .route("/rest/v1/users/:id/cart")
    .get(usersList.displayUserCart)
    .put(usersList.createUpdateUserCart);
};

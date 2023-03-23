const express = require('express');

const routerProducts = express.Router();

const { productController } = require('../controllers');

routerProducts.get('/', productController.listProducts);

routerProducts.get('/:id', productController.getProduct);

module.exports = routerProducts;

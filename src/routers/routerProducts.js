const express = require('express');

const routerProducts = express.Router();

const { productController } = require('../controllers');

routerProducts.get('/', productController.listProducts);

routerProducts.get('/:id', productController.getProduct);

routerProducts.post('/', productController.createProduct);

module.exports = routerProducts;

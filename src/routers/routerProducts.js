const express = require('express');
const { validateName } = require('../middlewares/validateName');

const routerProducts = express.Router();

const { productController } = require('../controllers');

routerProducts.get('/', productController.listProducts);

routerProducts.get('/:id', productController.getProduct);

routerProducts.post('/', validateName, productController.createProduct);

routerProducts.put('/', productController.updateProduct);

module.exports = routerProducts;

const express = require('express');
const { salesController } = require('../controllers');
const { validateSaleEmpty, productInvalid, validateSale } = require('../middlewares/validateSales');

const routerSales = express.Router();

routerSales.post('/', validateSaleEmpty, productInvalid, salesController.createNewSale);
routerSales.get('/', salesController.allSales);
routerSales.get('/:id', validateSale, salesController.saleById);

module.exports = routerSales;
const express = require('express');
const { salesController } = require('../controllers')
const { validateSaleEmpty, productInvalid } = require('../middlewares/validateSales');

const routerSales = express.Router();

routerSales.post('/', validateSaleEmpty, productInvalid,salesController.createNewSale);

module.exports = routerSales;
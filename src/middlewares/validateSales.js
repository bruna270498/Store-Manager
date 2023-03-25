const { productsModel, salesModel } = require('../models');

const validateSaleEmpty = (req, res, next) => {
  const allProduct = req.body;
  const product = allProduct.some(({ productId }) => !productId);
  const quantitys = allProduct.some(({ quantity }) => quantity === undefined);
  const quantity0 = allProduct.some(({ quantity }) => quantity <= 0);
  if (product) {
    return res.status(400).json({ "message": '\"productId\" is required' });
  }
  if (quantitys) {
    return res.status(400).json({ "message": '\"quantity\" is required' });
  }
  if (quantity0) {
    return res.status(422).json({"message": '\"quantity\" must be greater than or equal to 1' });
  }
  return next();
};

const productInvalid = async (req, res, next) => {
  const sales = req.body;
  const product = sales.map(({ productId }) => productsModel.findById(productId));
  const promiseProduct = await Promise.all(product);
  const invalid = promiseProduct.some((sale) => sale === undefined);
  if (invalid) {
    return res.status(404).json({ "message": 'Product not found' });
  }
  return next();
};

const validateSale = async (req, res, next) => {
  const { id } = req.params;
  const saleValid = await salesModel.findById(id);
  const promiseSale = await Promise.all(saleValid);
  if (promiseSale.length === 0) {
    return res.status(404).json({ "message": 'Sale not found' });
  }
  return next();
};

module.exports = {
  validateSaleEmpty,
  productInvalid,
  validateSale,
};
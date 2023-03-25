const { productsModel } = require('../models');

const errorProductId = '"message": productId is required"';
const errorQuantity = '"message": quantity is required"';
const errorQuantity0 = '"message": quantity must be greater than or equal to 1"';
const invalidId = '"message": "Product not found"';

const validateSaleEmpty = (req, res, next) => {
  const allProduct = req.body;
  const product = allProduct.some(({ productId }) => !productId);
  const quantitys = allProduct.some(({ quantity }) => quantity === undefined);
  const quantity0 = allProduct.some(({ quantity }) => quantity <= 0);
  if (product) {
    return res.status(400).json({ errorProductId });
  }
  if (quantitys) {
    return res.status(400).json({ errorQuantity });
  }
  if (quantity0) {
    return res.status(422).json({ errorQuantity0 });
  }
  return next();
};

const productInvalid = async (req, res, next) => {
  const sales = req.body;
  const product = sales.map(({ productId }) => productsModel.findById(productId));
  const promiseProduct = await Promise.all(product);
  const invalid = promiseProduct.some((sale) => sale === undefined);
  if (invalid) {
    return res.status(404).json({ invalidId });
  }
  return next();
};

module.exports = {
  validateSaleEmpty,
  productInvalid,
};
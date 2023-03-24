const { productsModel } = require('../models');

const validateSaleEmpty = (req, res, next) => {
  const allProduct = req.body;
  const product = allProduct.some(({ productId }) => !productId);
  const quantity = allProduct.some(({ quantity }) => quantity === undefined);
  const quantity0 = allProduct.some(({ quantity }) => quantity <= 0);
  console.log(product)
  if (product) {
    return res.status(400).json({ "message": "\"productId\" is required" })
  };
  if (quantity) {
    return res.status(400).json({ "message": "\"quantity\" is required" })
  };
  if (quantity0) {
    return res.status(422).json({ "message": "\"quantity\" must be greater than or equal to 1" })
  };
  return next();
};

const productInvalid = async (req, res, next) => {
  const sales = req.body;
  const product = sales.map(({ productId }) => productsModel.findById(productId));
  
  const test = await Promise.all(product);
  console.log(test)
  // console.log('promise', product)
  // console.log('product undefined',product.some((sale) => sale !== undefined))
  const l = test.some((sale) => sale === undefined)
  console.log(l)
  if (l) {
    return res.status(404).json({ "message": "Product not found" });
  };
  return next();
};

module.exports = {
  validateSaleEmpty,
  productInvalid,
};
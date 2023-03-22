const { productsModel } = require('../models')
const { validateId } = require('../middlewares/validations/validation')

const productsAll = async () => {
  const products = await productsModel.allProducts();
  return { type: null, message: products }

}

const findById = async (productId) => {
  const error = validateId(productId);

  if (error.type) return error;

  const product = await productsModel.findById(productId);

  if (product) return { type: null, message: product }
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }
}

// const createdProducts = async (name) => {
//   const newProductsId = await productsModel.insert(name);
  
//   const newProducts = await productsModel.findById(newProductsId);
  
//   return { type: null, message: newProducts }
// }

module.exports = {
  productsAll,
  findById,
  // createdProducts,
}
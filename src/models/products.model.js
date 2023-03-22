const connection = require('./connection');
// const camelize = require('camelize');
// const snakeize = require('snakeize');

const allProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products '
  )
  return result;
}

const findById = async (productId) => {
  const [[id]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId]
  )
  return id;
}

// const insert = async (product) => {
//   const productsColumn = Object.keys(product).join(', ');

//   const placeholder = Object.keys(product)
//     .map((_key) => '?')
//     .join(', ');
  
//   const [{ insertId }] = await connection.execute(
//     `INSERT INTO StoreManager.products (${productsColumn}) VALUE (${placeholder})`,
//     [...Object.values(product)],
//   );

//   return insertId;
// }

module.exports = {
  allProducts,
  findById,
  // insert,
}
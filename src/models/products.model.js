const connection = require('./connection');
// const camelize = require('camelize');
// const snakeize = require('snakeize');

const allProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ',
  );
  return result;
};

const findById = async (productId) => {
  const [[id]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return id;
};

const insert = async (product) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (name) VALUE (?)`,
    [product],
  );
  return insertId;
};

module.exports = {
  allProducts,
  findById,
  insert,
};
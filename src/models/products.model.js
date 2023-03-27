const connection = require('./connection');

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
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [product],
  );
  return insertId;
};

const updateProduct = async (id, name) => {
  const result = await connection.execute(
    ` UPDATE StoreManager.products
      SET name = ?
      WHERE id = ?;`,
    [name, id],
  );
  return result;
};

module.exports = {
  allProducts,
  findById,
  insert,
  updateProduct,
};
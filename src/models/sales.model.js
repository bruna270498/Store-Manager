const connection = require('./connection');

const createNewSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())', 
  );
  return insertId;
};

const createProductsSaleNew = async (saleId, { productId, quantity }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)', 
    [saleId, productId, quantity],
  );
  return insertId;
};

const saleAll = async () => {
  const [result] = await connection.execute(
    'SELECT s.sale_id, c.date, s.product_id, quantity FROM StoreManager.sales_products as s INNER JOIN StoreManager.sales as c ',
  );
  return result;
};

const findById = async (saleId) => {
  const [sale] = await connection.execute(
    'SELECT  c.date, s.product_id, quantity FROM StoreManager.sales_products as s INNER JOIN StoreManager.sales as c ON id = sale_id WHERE id = ?',
    [saleId],
  );
  return sale;
};

module.exports = {
  createNewSale,
  createProductsSaleNew,
  saleAll,
  findById,
};
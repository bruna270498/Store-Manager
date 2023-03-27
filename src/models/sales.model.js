const connection = require('./connection');

const createNewSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())', 
  );
  return insertId;
};

const createProductsSaleNew = async (saleId, { productId, quantity }) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
    VALUES (?, ?, ?)`, 
    [saleId, productId, quantity],
  );
  return insertId;
};

const saleAll = async () => {
  const [result] = await connection.execute(
    `SELECT id AS saleId, date, product_id as productId, quantity 
    FROM StoreManager.sales
    INNER JOIN StoreManager.sales_products ON id = sale_id
    ORDER BY sale_id ASC, product_id ASC;`,
  );
  return result;
};

const findById = async (saleId) => {
  const [sale] = await connection.execute(
    `SELECT date, product_id AS productId, quantity
    FROM StoreManager.sales 
    INNER JOIN StoreManager.sales_products
    ON id = sale_id 
    WHERE id = ?
    ORDER BY sale_id ASC, product_id ASC;`,
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
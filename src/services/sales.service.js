const { salesModel } = require('../models');


const createSale = async (saleArray) => {
  const saleId = await salesModel.createNewSale();
  const saleNew = saleArray.map((product) => salesModel.createProductsSaleNew(saleId, product));
  await Promise.all(saleNew);
  return { id: saleId, itemsSold: saleArray };
};

const salesAll = async () => {
  const allSales = await salesModel.saleAll();
  return allSales;
};

const searchForSale = async (saleId) => {
  const idSale = await salesModel.findById(saleId);
  return idSale;
};

module.exports = {
  createSale,
  salesAll,
  searchForSale,
};
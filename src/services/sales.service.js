const { salesModel} = require('../models');

const createSale = async (saleArray) => {
  const saleId = await salesModel.createNewSale();
  const saleNew = saleArray.map((product) => {
    return salesModel.createProductsSaleNew(saleId, product);
  });
  await Promise.all(saleNew);
  return { id: saleId, itemsSold: saleArray };
};

module.exports = {
  createSale,
};
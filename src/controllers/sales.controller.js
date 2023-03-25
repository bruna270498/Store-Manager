const { saleServices } = require('../services');

const createNewSale = async (req, res) => {
  const sale = await saleServices.createSale(req.body);
  return res.status(201).json(sale);
};

const allSales = async (req, res) => {
  const sales = await saleServices.salesAll(req.body);
  return res.status(200).json(sales);
};

const saleById = async (req, res) => {
  const { id } = req.params;
  const findById = await saleServices.searchForSale(id);
  return res.status(200).json(findById);
};

module.exports = {
  createNewSale,
  allSales,
  saleById,
};
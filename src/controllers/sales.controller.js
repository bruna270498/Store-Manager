const { saleServices } = require('../services');

const createNewSale = async (req, res) => {
  sale = await saleServices.createSale(req.body);
  return res.status(201).json(sale);
};

module.exports = {
  createNewSale,
};
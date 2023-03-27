const { productsServices } = require('../services');
const errorMap = require('../utils/erroMap');

const listProducts = async (_req, res) => {
  const { type, message } = await productsServices.productsAll();
  if (type) return res.status(errorMap.mapError(type)).json(message);
  return res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsServices.createdProducts(name);
  if (type) return res.status(errorMap.mapError(type)).json(message);
  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsServices.productUpdate(id, name);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.productDelete(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(204).json(message);
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
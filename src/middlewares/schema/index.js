const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const nameSchemaLength = Joi.string().min(5).required();
const nameSchema = Joi.string().required();

module.exports = {
  idSchema,
  nameSchemaLength,
  nameSchema,
};
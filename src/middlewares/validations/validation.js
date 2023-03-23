const { idSchema, nameSchemaLength, nameSchema } = require('../schema');

const validateId = async (id) => {
  const { error } = idSchema.validate(id);

  if (error) return { type: 'ID_INVALID', message: '"id" not found' };
  return { type: null, message: '' };
};

const validateNameLength = async (name) => {
  const { error } = nameSchemaLength.validate(name);
  if (error) return { type: 'NAME_MINOR_5', message: '"name" length must be at least 5 characters long' };
  return { type: null, message: '' };
};

const validateName = async (name) => {
  const { error } = nameSchema.validate(name);
  if (error) return { type: 'NAME_EMPTY', message: '"name" is required' };
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateNameLength,
  validateName,
};
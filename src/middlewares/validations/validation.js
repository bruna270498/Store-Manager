const { idSchema } = require('../schema')

const validateId = async (id) => {
  const { error } = idSchema.validate(id)

  if (error) return { type: 'ID_INVALID', message: '"id" not found' }
  return { type: null, message: '' };
}

module.exports = {
  validateId,
}
const errorMap = {
  PRODUCT_NOT_FOUND: '404',
  ID_INVALID: '422',
};

const mapError = (error) => errorMap[error] || '500';

module.exports = {
  errorMap,
  mapError,
};
const errorMap = {
  PRODUCT_NOT_FOUND: '404',
  ID_INVALID: '422',
  NAME_EMPTY: '400',
  NAME_MINOR_5: '422',
};

const mapError = (error) => errorMap[error] || '500';

module.exports = {
  errorMap,
  mapError,
};
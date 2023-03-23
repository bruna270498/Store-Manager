const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsServices } = require('../../../src/services');


const { products } = require('../models/mocks/products.model.mock');

describe('Verificando produto na camada Service', async () => {
  it('Retorna toda lista de Produtos', async () => {
    // Arranjo
    sinon.stub(productsModel, 'allProducts').resolves(products);
    // Agir
    const result = await productsServices.productsAll();
    // Afirmar
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal(products);
  });
  it('Retorna produto por id', async () => {
    // Arranjo
    sinon.stub(productsModel, 'findById').resolves(products[0]);
    // Agir
    const product = await productsServices.findById(1);
    // Afirmar
    expect(product.type).to.equal(null);
    expect(product.message).to.deep.equal(products[0])
  });
  afterEach(function () {
    sinon.restore();
  });
});
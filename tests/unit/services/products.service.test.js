const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsServices } = require('../../../src/services');


const { products, newObjProduct } = require('../models/mocks/products.model.mock');

describe('Verificando produto na camada Service', async function () {
  it('Retorna toda lista de Produtos', async function () {
    // Arranjo
    sinon.stub(productsModel, 'allProducts').resolves(products);
    // Agir
    const result = await productsServices.productsAll();
    // Afirmar
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal(products);
  });
  it('Retorna produto por id', async function () {
    // Arranjo
    sinon.stub(productsModel, 'findById').resolves(products[0]);
    // Agir
    const product = await productsServices.findById(1);
    // Afirmar
    expect(product.type).to.equal(null);
    expect(product.message).to.deep.equal(products[0])
  });
  it('Cadastrando no Service', async function () {

    const error = await productsServices.createdProducts('Capa da Ravena');
    
    expect(error.message).to.equal(newObjProduct);

    afterEach(function () {
      sinon.restore();
    });
  
  });
  afterEach(function () {
    sinon.restore();
  });
});
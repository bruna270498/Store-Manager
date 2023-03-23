const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { productsServices } = require('../../../src/services');
const { productController } = require('../../../src/controllers')
const { expect } = chai;
chai.use(sinonChai);
const { products } = require('../models/mocks/products.model.mock');

describe('Testando a camada de Controller', async () => {
  it('Testando retorna de lista de produtos', async () => {
    //Arranjo
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'productsAll')
      .resolves({ type: null, message: products });
    //Agir
    await productController.listProducts(req, res);
    //Afirmar
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });
  it('Testando retorno de produto por id', async () => {
    //Arranjo
    const res = {};
    const req = {
      params: { id: 1 }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'findById')
      .resolves({ type: null, message: products[0] });
    //Agir
    await productController.getProduct(req, res);
    //Afirmar
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });
  afterEach(function () {
    sinon.restore();
  });
});
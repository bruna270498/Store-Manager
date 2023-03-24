const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { productsServices } = require('../../../src/services');
const { productController } = require('../../../src/controllers')
const { expect } = chai;
chai.use(sinonChai);
const { products, newProduct } = require('../models/mocks/products.model.mock');

describe('Testando a camada de Controller', async function (){
  it('Testando retorna de lista de produtos', async function () {
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
  it('Testando retorno de produto por id', async function () {
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
  it('Testando o cadastro de produto', async function () {
    const res = {};
    const req = {
      body: newProduct,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'createdProducts')
      .resolves({ type: null, message: newProduct });
    
    await productController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });
  afterEach(function () {
    sinon.restore();
  });
});
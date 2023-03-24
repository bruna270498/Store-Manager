const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { products, newProduct } = require('./mocks/products.model.mock');

describe('Testando unidade de model de produtos', async function () {
  it('Pegando lista de Produtos', async () => {
    // Arranjo
    sinon.stub(connection, 'execute').resolves([products]);
    // Agir
    const result = await productsModel.allProducts();
    // Afirmar
    expect(result).to.deep.equal(products);
  });
  it('Recuperando produto com o id', async function () {
    //Arranjo
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    //Agir
    const product = await productsModel.findById(1);
    //Afirmar
    expect(product).to.be.deep.equal(products[0]);
  });
  it('Cadastrando novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    const newProducts = await productsModel.insert(newProduct);
    expect(newProducts).to.equal(4);

  });
  afterEach(function () {
    sinon.restore();
  });
});
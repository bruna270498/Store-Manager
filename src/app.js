const express = require('express');
const routerProducts = require('./routers/routerProducts');
const routerSales = require('./routers/routerSales');

const app = express();
app.use(express.json());
app.use('/products', routerProducts);
app.use('/sales', routerSales);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
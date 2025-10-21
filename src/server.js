const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const produtoRoutes = require('./routes/produtos');

app.use('/produtos', produtoRoutes);

app.listen(port, () => {
  console.log(`🚀 Servidor da DNCommerce rodando em http://localhost:${port}`);
});
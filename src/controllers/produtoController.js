const db = require('../config/db');

exports.criarProduto = async (req, res) => {
  const { nome, descricao, preco, quantidade_estoque } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO Produtos (nome, descricao, preco, quantidade_estoque) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, descricao, preco, quantidade_estoque]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

exports.listarProdutos = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM Produtos ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};
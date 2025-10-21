const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dncommerce',
  password: 'siare011',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
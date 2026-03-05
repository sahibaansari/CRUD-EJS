const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blogdb",
  password: "Root@123",
 
});

module.exports = pool;

const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
  user: process.env.DB_USER_NAME || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "userApi",
  password: process.env.DB_PASSWORD || "root",
  port: process.env.DB_PORT || 5432,
});

module.exports = {
  pool,
};

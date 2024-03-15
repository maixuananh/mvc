const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  port: 3309
});

// Export một phương thức để lấy một kết nối từ pool
exports.getConnection = function(callback) {
  pool.getConnection(callback);
};
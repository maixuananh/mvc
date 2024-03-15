// routes/api.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');
router.get('/users', async (req, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      res.status(500).json({ message: 'Failed to get database connection' });
      return;
    }

    connection.query('SELECT * FROM tbl_customer', (err, results) => {
      connection.release();
      if (err) {
        res.status(500).json({ message: err.message });
        return;

      }
      console.log("value " ,res.json(results));
      res.status(200).json
    });
  });
});

module.exports = router;

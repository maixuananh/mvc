const db = require('./db');
class User {
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM tbl_admin)', (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
}

module.exports = User;
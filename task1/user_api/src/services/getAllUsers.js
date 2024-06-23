const db = require("../postgress-config");
async function getAllUsers() {
  const query = await db.pool.query("SELECT * FROM users ORDER BY id");
  return query;
}

module.exports = getAllUsers;

const db = require("../postgress-config");
async function createUser(params) {
  const { name, email } = params;
  const query = await db.pool.query(
    "INSERT INTO users (name,email) VALUES ($1, $2) RETURNING *;",
    [name, email]
  );
  return query;
}

module.exports = createUser;

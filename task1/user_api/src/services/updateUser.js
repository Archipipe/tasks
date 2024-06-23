const db = require("../postgress-config");
async function updateUser(params) {
  const { name, email, id } = params;
  const query = await db.pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;",
    [name, email, id]
  );
  return query;
}

module.exports = updateUser;

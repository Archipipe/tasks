const db = require("../postgress-config");
async function paginateUser(params) {
  const { userId, page, limit } = params;

  const offset = (page - 1) * limit;
  const query = await db.pool.query(
    "SELECT * FROM user_history WHERE user_id = $1 ORDER BY action_date DESC LIMIT $2 OFFSET $3",
    [userId, limit, offset]
  );
  return query;
}

module.exports = paginateUser;

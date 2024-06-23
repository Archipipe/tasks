const db = require("../postgress-config");
async function saveUser(params) {
  const { userId, userAction } = params;
  const query = await db.pool.query(
    "INSERT INTO user_history (user_id,user_action,action_date) VALUES ($1, $2,NOW()) RETURNING *;",
    [userId, userAction]
  );
  return query;
}

module.exports = saveUser;

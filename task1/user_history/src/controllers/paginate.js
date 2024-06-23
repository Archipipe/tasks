const paginateUser = require("../services/paginateUser");
const idValidator = require("../utilities/idValidator");

const paginate = async (req, res) => {
  let { userId, page, limit } = req.body;
  console.log({ userId, page, limit });
  userId = idValidator(userId);
  page = idValidator(page);
  limit = idValidator(limit);

  if (!userId || !page || !limit) {
    res.status(400).send("Invalid data");
    return;
  }

  try {
    const queryRes = await paginateUser({ userId, page, limit });
    if (queryRes.rows.length === 0) res.status(400).send("No such data");
    else res.status(200).json(queryRes.rows);
  } catch (err) {
    res.status(500).json("Some error occured");
    throw err;
  }
};

module.exports = paginate;

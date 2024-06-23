const saveUser = require("../services/saveUser");
const idValidator = require("../utilities/idValidator");
const userActionValidator = require("../utilities/userActionValidator");

const save = async (req, res) => {
  let { userId, userAction } = req.body;
  userId = idValidator(userId);
  userAction = userActionValidator(userAction);
  console.log(userId, userAction);
  if (!userId || !userAction) {
    res.status(400).send("Invalid data");
    return;
  }

  try {
    const queryRes = await saveUser({ userId, userAction });
    res.status(200).json(queryRes.rows[0]);
  } catch (err) {
    res.status(500).json("Some error occured");
    throw err;
  }
};

module.exports = save;

require("dotenv").config();
const nameValidator = require("../utilities/nameValidator");
const emailValidator = require("../utilities/emailValidator");
const createUser = require("../services/createUser");
const request = require("request");

const create = async (req, res) => {
  let { name, email } = req.body;
  name = nameValidator(name);
  email = emailValidator(email);
  if (!name || !email) {
    res.status(400).send("Invalid data");
    return;
  }

  try {
    const queryRes = await createUser({ name, email });
    const user = queryRes.rows[0];
    request.post(`${process.env.HISTORY_API_URL}/save`, {
      json: { userId: user.id, userAction: "create" },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json("Some error occured");
    throw err;
  }
};

module.exports = create;

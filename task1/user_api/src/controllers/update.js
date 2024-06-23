const updateUser = require("../services/updateUser");
const nameValidator = require("../utilities/nameValidator");
const emailValidator = require("../utilities/emailValidator");
const request = require("request");

const update = async (req, res) => {
  const id = parseInt(req.params.id);
  let { name, email } = req.body;
  name = nameValidator(name);
  email = emailValidator(email);

  if (!name || !email) {
    res.status(400).send("Invalid data");
    return;
  }

  try {
    const queryRes = await updateUser({ name, email, id });
    if (queryRes.rows.length === 0)
      res.status(400).send("Threre is with this id");
    else {
      const user = queryRes.rows[0];
      request.post(`${process.env.HISTORY_API_URL}/save`, {
        json: { userId: user.id, userAction: "update" },
      });
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json("Some error occured");
    throw err;
  }
};

module.exports = update;

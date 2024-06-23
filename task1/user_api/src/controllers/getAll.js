const getAllUsers = require("../services/getAllUsers");

const getAll = async (req, res) => {
  try {
    const queryRes = await getAllUsers();
    res.status(200).json(queryRes.rows);
  } catch (err) {
    res.status(500).json("Some error occured");
    throw err;
  }
};

module.exports = getAll;

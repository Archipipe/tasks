const express = require("express");
const path = require("path");
const controllerPath = path.join(path.dirname(__dirname), "controllers");

const router = express.Router();
const { create, getAll, update } = require("require-all")(controllerPath);

router.get("/users", getAll);
router.post("/user", create);
router.put("/user/:id", update);

module.exports = router;

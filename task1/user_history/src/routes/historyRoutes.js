const express = require("express");
const path = require("path");
const controllerPath = path.join(path.dirname(__dirname), "controllers");

const router = express.Router();
const { save, paginate } = require("require-all")(controllerPath);

router.post("/save", save);
router.post("/show", paginate);

module.exports = router;

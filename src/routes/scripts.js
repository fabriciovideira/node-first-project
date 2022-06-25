const express = require("express");
const { postScripts } = require("../endpoints/scripts");
const auths = require("../middlewares/auths");

const router = express.Router();

router.post("/scripts", auths, postScripts);

module.exports = router;

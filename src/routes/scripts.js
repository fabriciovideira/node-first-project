const express = require("express");
const HttpError = require("../utils/HttpError");
const { getScripts, postTest, getTeste } = require("../endpoints/scripts");
const auths = require("../middlewares/auths");

const router = express.Router();

router.get("/", getScripts);

router.post(
  "/aaaa",
  auths,
  postTest
);

router.get("/teste", getTeste);

module.exports = router;

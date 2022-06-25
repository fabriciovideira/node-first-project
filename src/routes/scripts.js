const express = require("express");
const { getScripts, getAAAA, getTeste } = require("../endpoints/scripts");

const router = express.Router();

router.get("/", getScripts);

router.post("/aaaa", getAAAA);

router.get("/teste", getTeste);

module.exports = router;

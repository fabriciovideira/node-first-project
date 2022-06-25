const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/teste", (req, res) => {
  res.send("ol222a 123");
});

module.exports = router;

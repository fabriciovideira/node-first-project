const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "ola" });
});

router.get("/teste", (req, res) => {
  res.json({ message: "ola na rota teste" });
});

module.exports = router;

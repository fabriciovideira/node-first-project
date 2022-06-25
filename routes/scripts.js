const express = require("express");
const endpoint = require("../functions/endpoint");
const HttpError = require("../utils/HttpError");

const router = express.Router();

router.get(
  "/",
  endpoint(async (req, res) => {
    if (Math.random() > 0.5) {
      throw new HttpError(400, "erro");
    }

    res.json({ message: "ola" });
  })
);

router.post(
  "/aaaa",
  endpoint(async (req, res) => {
    res.json({ message: "post" });
  })
);

router.get(
  "/teste",
  endpoint(async (req, res) => {
    res.json({ message: "ola 2" });
  })
);

module.exports = router;

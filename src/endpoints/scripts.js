const endpoint = require("../functions/endpoint");
const HttpError = require("../utils/HttpError");

exports.getScripts = endpoint(async (req, res) => {
  if (Math.random() > 0.5) {
    throw new HttpError(400, "erro");
  }

  res.json({ message: "ola" });
});

exports.getAAAA = endpoint(async (req, res) => {
  res.json({ message: "post" });
});

exports.getTeste = endpoint(async (req, res) => {
  res.json({ message: "ola 2" });
});
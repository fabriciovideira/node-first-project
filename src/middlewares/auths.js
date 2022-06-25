const endpoint = require("../functions/endpoint");
const HttpError = require("../utils/HttpError");

module.exports = endpoint((req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer ")) {
    throw new HttpError(401, "Nao Autorizado");
  }

  const token = auth.slice("Bearer ".length);

  if (token !== process.env.API_TOKEN) {
    throw new HttpError(401, "Nao Autorizado");
  }

  next();
});






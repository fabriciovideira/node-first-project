const endpoint = require("../functions/endpoint");
const { database } = require("../utils/database");

exports.postScripts = endpoint(async (req, res) => {
  const { script } = req.body;

  console.log(script)

  const resultado = await database.raw(script);

  res.json(resultado);
});

const knex = require("knex");
const path = require("path");

exports.database = knex({
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, "..", "..", "database.sqlite3"),
  },
});

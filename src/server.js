const dotenv = require("dotenv");

dotenv.config();

const bodyParser = require("body-parser");
const express = require("express");
const scrips = require("./routes/scripts");
const { database } = require("./utils/database");

const app = express();

app.use(bodyParser.json());

app.use(scrips);

app.use((req, res) => {
  res.status(404).json({ message: "resource not found" });
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message;

  if (status === 500) {
    console.error(err);

    if (process.env.NODE_ENV === "production") {
      message = "Internal server error";
    }
  }

  res.status(status).json({ message });
});

database.raw("select 1").then(() => {
  app.listen(3000, () => {
    console.log("http://localhost:3000");
  });
});

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/teste", (req, res) => {
  res.send("ola");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

const express = require("express");
const scrips = require("./routes/scripts");

const app = express();

app.use(scrips);

app.use((req, res) => {
  res.status(404).json({ message: "resource not found" });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

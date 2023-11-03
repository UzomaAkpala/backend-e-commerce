const express = require("express");

const app = express();

const port = 3000;

app.use((req, res, next) => {
  console.log("first middle ware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/two", (req, res) => {
  res.send("Hello World 2!");
});

app.listen(port, () => {
  console.log("Example listening on port 3000");
});

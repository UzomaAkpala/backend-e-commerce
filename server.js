const express = require("express");

const app = express();

const port = 3000;

const apiRoutes = require("./routes/apiRoutes");

app.get("/", async (req, res, next) => {
  res.json({ message: "Api running" });
});

// mongodb connection

const connectDb = require("./config/db");
const Product = require("./models/ProductModel");
connectDb();

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log("Example listening on port 3000");
});

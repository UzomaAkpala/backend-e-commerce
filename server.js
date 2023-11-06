const express = require("express");

const app = express();

const port = 3000;

const apiRoutes = require("./routes/apiRoutes");

app.get("/", async (req, res, next) => {
  const Product = require("./models/ProductModel");
  try {
    const product = new Product();
    product.name = "New product name";

    const productSaved = await product.save();
    console.log(productSaved === product);
    const products = await Product.find();
    console.log(products.length);
    res.send("Product created" + product._id);
  } catch (error) {
    next(error);
  }
  //res.json({ message: "Api running" });
});

// mongodb connection

const connectDb = require("./config/db");
const Product = require("./models/ProductModel");
connectDb();

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log("Example listening on port 3000");
});

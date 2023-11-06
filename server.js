const express = require("express");

const app = express();

const port = 3000;

const apiRoutes = require("./routes/apiRoutes");

app.get("/", (req, res) => {
  res.json({ message: "Api running" });
});

// mongodb connection

const connectDb = require("./config/db");
connectDb();

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log("Example listening on port 3000");
});

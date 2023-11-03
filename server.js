const express = require("express");

const app = express();

const port = 3000;

const apiRoutes = require("./routes/apiRoutes");

app.get("/", (req, res) => {
  res.json({ message: "Api running" });
});

app.use("/api", apiRoutes);

// app.get("/api/products", (req, res) => {
//   res.send("Handling product routes.");
// });

app.listen(port, () => {
  console.log("Example listening on port 3000");
});

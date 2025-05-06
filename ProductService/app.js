// ProductService/app.js
const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes"); // Menghubungkan route

const app = express();
app.use(bodyParser.json()); // Middleware untuk parsing JSON
app.use("/products", productRoutes); // Semua route terkait /products

app.listen(3002, () => {
  console.log("ProductService is running on http://localhost:3002");
});

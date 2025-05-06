// OrderService/app.js
const express = require("express");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRoutes"); // Menghubungkan route

const app = express();
app.use(bodyParser.json()); // Middleware untuk parsing JSON
app.use("/orders", orderRoutes); // Semua route terkait /orders

app.listen(3005, () => {
  console.log("OrderService is running on http://localhost:3005");
});

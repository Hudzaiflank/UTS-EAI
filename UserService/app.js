// UserService/app.js
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes"); // Menghubungkan route

const app = express();
app.use(bodyParser.json()); // Middleware untuk parsing JSON
app.use("/users", userRoutes); // Semua route terkait /users

app.listen(3001, () => {
  console.log("UserService is running on http://localhost:3001");
});

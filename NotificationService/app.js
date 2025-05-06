// NotificationService/app.js
const express = require("express");
const bodyParser = require("body-parser");
const notificationRoutes = require("./routes/notificationRoutes"); // Menghubungkan route

const app = express();
app.use(bodyParser.json()); // Middleware untuk parsing JSON
app.use("/notifications", notificationRoutes); // Semua route terkait /notifications

app.listen(3004, () => {
  console.log("NotificationService is running on http://localhost:3004");
});

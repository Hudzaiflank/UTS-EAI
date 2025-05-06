const express = require("express");
const bodyParser = require("body-parser");
const complaintRoutes = require("./routes/complaintRoutes"); // Menghubungkan route

const app = express();
app.use(bodyParser.json()); // Middleware untuk parsing JSON
app.use("/complaints", complaintRoutes); // Semua route terkait /complaints

app.listen(3003, () => {
  console.log("ComplaintService is running on http://localhost:3003");
});

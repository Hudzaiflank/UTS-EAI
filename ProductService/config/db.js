// ProductService/config/db.js
const mysql = require("mysql");

// Membuat koneksi ke database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_service_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

module.exports = db;

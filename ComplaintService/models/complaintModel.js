// ComplaintService/models/complaintModel.js
const db = require("../config/db"); // Koneksi ke database

// Mendapatkan data keluhan berdasarkan complaint_id
const getComplaintById = (complaintId, callback) => {
  const query = "SELECT * FROM complaints WHERE complaint_id = ?";
  db.query(query, [complaintId], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results[0]); // Mengembalikan data keluhan
    }
  });
};

// Menambahkan keluhan baru ke dalam database
const addComplaint = (userId, productId, complaintText, status, callback) => {
  const query =
    "INSERT INTO complaints (user_id, product_id, complaint_text, status) VALUES (?, ?, ?, ?)";
  db.query(
    query,
    [userId, productId, complaintText, status],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results); // Mengembalikan hasil query insert
      }
    }
  );
};

module.exports = { getComplaintById, addComplaint };

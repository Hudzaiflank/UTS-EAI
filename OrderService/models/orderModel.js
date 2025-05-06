// OrderService/models/orderModel.js
const db = require("../config/db"); // Koneksi ke database

// Mendapatkan data permintaan berdasarkan order_id
const getOrderById = (orderId, callback) => {
  const query = "SELECT * FROM orders WHERE order_id = ?";
  db.query(query, [orderId], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results[0]); // Mengembalikan data permintaan
    }
  });
};

// Menambahkan permintaan baru ke dalam database
const addOrder = (userId, productId, requestType, status, callback) => {
  const query =
    "INSERT INTO orders (user_id, product_id, request_type, status) VALUES (?, ?, ?, ?)";
  db.query(query, [userId, productId, requestType, status], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results); // Mengembalikan hasil query insert
    }
  });
};

module.exports = { getOrderById, addOrder };

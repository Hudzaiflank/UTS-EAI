// UserService/models/userModel.js
const db = require("../config/db"); // Koneksi ke database

// Mendapatkan data pengguna berdasarkan user_id
const getUserById = (userId, callback) => {
  const query = "SELECT * FROM users WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results[0]); // Mengembalikan data pengguna
    }
  });
};

// Menambahkan pengguna baru ke dalam database
const addUser = (name, email, password, callback) => {
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(query, [name, email, password], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results); // Mengembalikan hasil query insert
    }
  });
};

module.exports = { getUserById, addUser };

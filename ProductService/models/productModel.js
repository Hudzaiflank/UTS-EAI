// ProductService/models/productModel.js
const db = require("../config/db"); // Koneksi ke database

// Mendapatkan data produk berdasarkan product_id
const getProductById = (productId, callback) => {
  const query = "SELECT * FROM products WHERE product_id = ?";
  db.query(query, [productId], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results[0]); // Mengembalikan data produk
    }
  });
};

// Menambahkan produk baru ke dalam database
const addProduct = (name, type, location, status, description, callback) => {
  const query =
    "INSERT INTO products (name, type, location, status, description) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [name, type, location, status, description],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results); // Mengembalikan hasil query insert
      }
    }
  );
};

module.exports = { getProductById, addProduct };

// ProductService/controllers/productController.js
const productModel = require("../models/productModel"); // Mengimpor model
const fetch = require("node-fetch"); // Mengimpor fetch untuk konsumsi data keluhan

// Menyediakan data produk berdasarkan product_id (Provider)
const getProductById = (req, res) => {
  const productId = req.params.id;
  productModel.getProductById(productId, (err, product) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving product", error: err });
    }
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product); // Menyajikan data produk
  });
};

// Menambahkan produk baru (Provider)
const addProduct = (req, res) => {
  const { name, type, location, status, description } = req.body;
  productModel.addProduct(
    name,
    type,
    location,
    status,
    description,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding product", error: err });
      }
      res
        .status(201)
        .json({
          message: "Product added successfully",
          productId: results.insertId,
        });
    }
  );
};

// Mengonsumsi data keluhan dari ComplaintService (Consumer)
const fetchComplaintData = (productId) => {
  fetch(`http://localhost:3003/complaints/product/${productId}`) // Request ke ComplaintService
    .then((response) => response.json())
    .then((data) => {
      console.log("Keluhan Fasilitas:", data);
    })
    .catch((error) => console.error("Error:", error));
};

module.exports = { getProductById, addProduct, fetchComplaintData };

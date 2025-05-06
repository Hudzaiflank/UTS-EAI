// ProductService/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route untuk mendapatkan data produk berdasarkan product_id
router.get("/:id", productController.getProductById);

// Route untuk menambahkan produk baru
router.post("/", productController.addProduct);

module.exports = router;

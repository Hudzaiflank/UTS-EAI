// OrderService/routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Route untuk mendapatkan data permintaan berdasarkan order_id
router.get("/:id", orderController.getOrderById);

// Route untuk menambahkan permintaan baru
router.post("/", orderController.addOrder);

module.exports = router;

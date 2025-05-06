// OrderService/controllers/orderController.js
const orderModel = require("../models/orderModel"); // Mengimpor model
const fetch = require("node-fetch"); // Mengimpor fetch untuk konsumsi data keluhan dan pengguna
// Menyediakan data permintaan berdasarkan order_id (Provider)
const getOrderById = (req, res) => {
  const orderId = req.params.id;
  orderModel.getOrderById(orderId, (err, order) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving order", error: err });
    }
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order); // Menyajikan data permintaan perbaikan
  });
};

// Menambahkan permintaan baru (Provider)
const addOrder = (req, res) => {
  const { userId, productId, requestType, status } = req.body;
  orderModel.addOrder(
    userId,
    productId,
    requestType,
    status,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding order", error: err });
      }
      res.status(201).json({
        message: "Order added successfully",
        orderId: results.insertId,
      });
    }
  );
};

// Mengonsumsi data keluhan dari ComplaintService (Consumer)
// OrderService/controllers/orderController.js

// Mengonsumsi data keluhan dari ComplaintService
const fetchComplaintData = (complaintId) => {
  fetch(`http://localhost:3003/complaints/${complaintId}`) // Request ke ComplaintService
    .then((response) => response.json())
    .then((data) => {
      console.log("Keluhan untuk Pemeliharaan:", data);
    })
    .catch((error) => console.error("Error:", error));
};

// Mengonsumsi data pengguna dari UserService (Consumer)
const fetchUserData = (userId) => {
  fetch(`http://localhost:3001/users/${userId}`) // Request ke UserService
    .then((response) => response.json())
    .then((data) => {
      console.log("Pengguna yang Mengajukan Permintaan:", data);
    })
    .catch((error) => console.error("Error:", error));
};

module.exports = { getOrderById, addOrder, fetchComplaintData, fetchUserData };

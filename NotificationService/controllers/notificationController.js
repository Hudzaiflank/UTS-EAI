// NotificationService/controllers/notificationController.js
const notificationModel = require("../models/notificationModel"); // Mengimpor model
const fetch = require("node-fetch"); // Mengimpor fetch untuk konsumsi data keluhan

// Menyediakan data notifikasi berdasarkan notification_id (Provider)
const getNotificationById = (req, res) => {
  const notificationId = req.params.id;
  notificationModel.getNotificationById(notificationId, (err, notification) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving notification", error: err });
    }
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.status(200).json(notification); // Menyajikan data notifikasi
  });
};

// Menambahkan notifikasi baru (Provider)
const addNotification = (req, res) => {
  const { userId, complaintId, message, status } = req.body;
  notificationModel.addNotification(
    userId,
    complaintId,
    message,
    status,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding notification", error: err });
      }
      res
        .status(201)
        .json({
          message: "Notification added successfully",
          notificationId: results.insertId,
        });
    }
  );
};

// Mengonsumsi data keluhan dari ComplaintService (Consumer)
const fetchComplaintData = (complaintId) => {
  fetch(`http://localhost:3003/complaints/${complaintId}`) // Request ke ComplaintService
    .then((response) => response.json())
    .then((data) => {
      console.log("Keluhan untuk Notifikasi:", data);
    })
    .catch((error) => console.error("Error:", error));
};

// Mengonsumsi data produk dari ProductService (Consumer)
const fetchProductData = (productId) => {
  fetch(`http://localhost:3002/products/${productId}`) // Request ke ProductService
    .then((response) => response.json())
    .then((data) => {
      console.log("Produk terkait Notifikasi:", data);
    })
    .catch((error) => console.error("Error:", error));
};

module.exports = {
  getNotificationById,
  addNotification,
  fetchComplaintData,
  fetchProductData,
};

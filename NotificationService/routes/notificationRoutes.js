// NotificationService/routes/notificationRoutes.js
const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Route untuk mendapatkan data notifikasi berdasarkan notification_id
router.get("/:id", notificationController.getNotificationById);

// Route untuk menambahkan notifikasi baru
router.post("/", notificationController.addNotification);

module.exports = router;

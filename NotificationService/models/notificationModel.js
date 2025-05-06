// NotificationService/models/notificationModel.js
const db = require("../config/db"); // Koneksi ke database

// Mendapatkan data notifikasi berdasarkan notification_id
const getNotificationById = (notificationId, callback) => {
  const query = "SELECT * FROM notifications WHERE notification_id = ?";
  db.query(query, [notificationId], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results[0]); // Mengembalikan data notifikasi
    }
  });
};

// Menambahkan notifikasi baru ke dalam database
const addNotification = (userId, complaintId, message, status, callback) => {
  const query =
    "INSERT INTO notifications (user_id, complaint_id, message, status) VALUES (?, ?, ?, ?)";
  db.query(query, [userId, complaintId, message, status], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results); // Mengembalikan hasil query insert
    }
  });
};

module.exports = { getNotificationById, addNotification };

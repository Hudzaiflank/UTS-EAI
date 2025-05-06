// UserService/controllers/userController.js
const userModel = require("../models/userModel"); // Mengimpor model
const fetch = require("node-fetch"); // Mengimpor fetch untuk konsumsi data keluhan

// Menyediakan data pengguna berdasarkan user_id (Provider)
const getUserById = (req, res) => {
  const userId = req.params.id;
  userModel.getUserById(userId, (err, user) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving user", error: err });
    }
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user); // Menyajikan data pengguna
  });
};

// Menambahkan pengguna baru (Provider)
const addUser = (req, res) => {
  const { name, email, password } = req.body;
  userModel.addUser(name, email, password, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error adding user", error: err });
    }
    res
      .status(201)
      .json({ message: "User added successfully", userId: results.insertId });
  });
};

// Mengonsumsi data keluhan dari ComplaintService (Consumer)
const fetchComplaintData = (userId) => {
  fetch(`http://localhost:3003/complaints/user/${userId}`) // Request ke ComplaintService
    .then((response) => response.json())
    .then((data) => {
      console.log("Keluhan Pengguna:", data);
    })
    .catch((error) => console.error("Error:", error));
};

module.exports = { getUserById, addUser, fetchComplaintData };

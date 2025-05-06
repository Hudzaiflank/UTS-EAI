// UserService/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route untuk mendapatkan data pengguna berdasarkan user_id
router.get("/:id", userController.getUserById);

// Route untuk menambahkan pengguna baru
router.post("/", userController.addUser);

module.exports = router;

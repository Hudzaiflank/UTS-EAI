// ComplaintService/routes/complaintRoutes.js
const express = require("express");
const router = express.Router();
const complaintController = require("../controllers/complaintController");

// Route untuk mendapatkan data keluhan berdasarkan complaint_id
router.get("/:id", complaintController.getComplaintById);

// Route untuk menambahkan keluhan baru
router.post("/", complaintController.addComplaint);

module.exports = router;

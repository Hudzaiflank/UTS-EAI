// ComplaintService/controllers/complaintController.js
const complaintModel = require("../models/complaintModel"); // Mengimpor model
const fetch = require("node-fetch"); // Mengimpor fetch untuk konsumsi data produk

// Menyediakan data keluhan berdasarkan complaint_id (Provider)
const getComplaintById = (req, res) => {
  const complaintId = req.params.id;
  complaintModel.getComplaintById(complaintId, (err, complaint) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving complaint", error: err });
    }
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }
    res.status(200).json(complaint); // Menyajikan data keluhan
  });
};

// Menambahkan keluhan baru (Provider)
const addComplaint = (req, res) => {
  const { userId, productId, complaintText, status } = req.body;
  complaintModel.addComplaint(
    userId,
    productId,
    complaintText,
    status,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding complaint", error: err });
      }
      res
        .status(201)
        .json({
          message: "Complaint added successfully",
          complaintId: results.insertId,
        });
    }
  );
};

// Mengonsumsi data produk dari ProductService (Consumer)
const fetchProductData = (productId) => {
  fetch(`http://localhost:3002/products/${productId}`) // Request ke ProductService
    .then((response) => response.json())
    .then((data) => {
      console.log("Fasilitas yang Dikeluhkan:", data);
    })
    .catch((error) => console.error("Error:", error));
};

module.exports = { getComplaintById, addComplaint, fetchProductData };

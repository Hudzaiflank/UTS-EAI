# API Dokumentasi untuk Layanan Publik

Dokumentasi ini menjelaskan API untuk layanan **UserService**, **ProductService**, **ComplaintService**, **NotificationService**, dan **OrderService** yang bekerja sama dalam sistem pemeliharaan fasilitas publik.

## **1. UserService**

### **Endpoint:**

- **`GET /users/:id`**
  - **Deskripsi**: Mengambil data pengguna berdasarkan **`user_id`**.
  - **Request:**
    ```http
    GET http://localhost:3001/users/1
    ```
  - **Response:**
    ```json
    {
      "user_id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "created_at": "2022-01-01T00:00:00",
      "updated_at": "2022-01-01T00:00:00"
    }
    ```

---

## **2. ProductService**

### **Endpoint:**

- **`GET /products/:id`**
  - **Deskripsi**: Mengambil data produk (fasilitas publik) berdasarkan **`product_id`**.
  - **Request:**
    ```http
    GET http://localhost:3002/products/1
    ```
  - **Response:**
    ```json
    {
      "product_id": 1,
      "name": "Jalan Raya",
      "type": "Jalan",
      "location": "Jakarta",
      "status": "Rusak",
      "description": "Jalan banyak berlubang"
    }
    ```

---

## **3. ComplaintService**

### **Endpoint:**

- **`GET /complaints/:id`**
  - **Deskripsi**: Mengambil data keluhan berdasarkan **`complaint_id`**.
  - **Request:**
    ```http
    GET http://localhost:3003/complaints/1
    ```
  - **Response:**
    ```json
    {
      "complaint_id": 1,
      "user_id": 1,
      "product_id": 1,
      "complaint_text": "Jalan banyak berlubang.",
      "status": "Pending",
      "created_at": "2022-01-01T00:00:00"
    }
    ```

---

## **4. NotificationService**

### **Endpoint:**

- **`GET /notifications/:id`**
  - **Deskripsi**: Mengambil data notifikasi berdasarkan **`notification_id`**.
  - **Request:**
    ```http
    GET http://localhost:3004/notifications/1
    ```
  - **Response:**
    ```json
    {
      "notification_id": 1,
      "user_id": 1,
      "complaint_id": 1,
      "message": "Keluhan Anda tentang jalan raya telah diterima dan sedang diproses.",
      "status": "Sent",
      "created_at": "2022-01-01T00:00:00"
    }
    ```

---

## **5. OrderService**

### **Endpoint:**

- **`GET /orders/:id`**

  - **Deskripsi**: Mengambil data permintaan perbaikan atau pemeliharaan berdasarkan **`order_id`**.
  - **Request:**
    ```http
    GET http://localhost:3005/orders/1
    ```
  - **Response:**
    ```json
    {
      "order_id": 1,
      "user_id": 1,
      "product_id": 1,
      "request_type": "Perbaikan",
      "status": "Pending",
      "created_at": "2022-01-01T00:00:00"
    }
    ```

- **`POST /orders`**
  - **Deskripsi**: Menambahkan permintaan perbaikan atau pemeliharaan.
  - **Request:**
    ```json
    {
      "userId": 1,
      "productId": 1,
      "requestType": "Perbaikan",
      "status": "Pending"
    }
    ```
  - **Response:**
    ```json
    {
      "message": "Order added successfully",
      "orderId": 1
    }
    ```

---

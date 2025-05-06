-- Langkah 1: Membuat Database (Jika Belum Ada)
CREATE DATABASE IF NOT EXISTS user_service_db;
USE user_service_db;

-- Langkah 2: Membuat Tabel Users (untuk UserService)
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  -- Kolom password untuk menyimpan sandi pengguna
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Menambahkan Data Dinamis untuk Users (termasuk password yang telah di-hash)
INSERT INTO users (name, email, password) VALUES
('John Doe', 'john.doe@example.com', 'password_hash_1'),
('Jane Smith', 'jane.smith@example.com', 'password_hash_2'),
('Robert Johnson', 'robert.johnson@example.com', 'password_hash_3');

-- Langkah 3: Membuat Tabel Products (untuk ProductService)
CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    status VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Menambahkan Data Dinamis untuk Products
INSERT INTO products (name, type, location, status, description) VALUES
('Jalan Raya', 'Jalan', 'Jakarta', 'Rusak', 'Jalan banyak berlubang'),
('Taman Kota', 'Taman', 'Bandung', 'Baik', 'Taman dengan banyak pohon'),
('Jembatan Merah', 'Jembatan', 'Surabaya', 'Rusak', 'Jembatan perlu perbaikan');

-- Langkah 4: Membuat Tabel Complaints (untuk ComplaintService)
CREATE TABLE IF NOT EXISTS complaints (
    complaint_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    complaint_text TEXT,
    status VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Menambahkan Data Dinamis untuk Complaints
INSERT INTO complaints (user_id, product_id, complaint_text, status) VALUES
(1, 1, 'Jalan banyak berlubang di sepanjang jalan raya.', 'Pending'),
(2, 2, 'Taman kurang terawat dan banyak sampah.', 'Resolved'),
(3, 3, 'Jembatan sudah retak dan perlu perbaikan segera.', 'In-progress');

-- Langkah 5: Membuat Tabel Notifications (untuk NotificationService)
CREATE TABLE IF NOT EXISTS notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    complaint_id INT,
    message TEXT,
    status VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (complaint_id) REFERENCES complaints(complaint_id)
);

-- Menambahkan Data Dinamis untuk Notifications
INSERT INTO notifications (user_id, complaint_id, message, status) VALUES
(1, 1, 'Keluhan Anda tentang jalan raya telah diterima dan sedang diproses.', 'Sent'),
(2, 2, 'Keluhan Anda tentang taman kota telah diselesaikan.', 'Sent'),
(3, 3, 'Keluhan Anda tentang jembatan sedang diproses.', 'Pending');

-- Langkah 6: Membuat Tabel Orders (untuk OrderService)
CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    request_type VARCHAR(255),
    status VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Menambahkan Data Dinamis untuk Orders
INSERT INTO orders (user_id, product_id, request_type, status) VALUES
(1, 1, 'Perbaikan', 'Pending'),
(2, 2, 'Pemeliharaan', 'Resolved'),
(3, 3, 'Perbaikan', 'In-progress');

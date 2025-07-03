CREATE DATABASE IF NOT EXISTS bloodbank;

USE bloodbank;

CREATE TABLE donors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  phone VARCHAR(20),
  bloodType VARCHAR(5),
  available BOOLEAN DEFAULT TRUE,
  role ENUM('donor', 'receiver', 'admin') DEFAULT 'donor'
);

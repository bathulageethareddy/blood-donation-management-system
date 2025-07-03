# 🩸 Blood Donation Management System

A full-stack web application designed to streamline and automate the process of blood donation. It efficiently connects **donors**, **receivers**, and **administrators** in a secure and user-friendly environment.

---

## 🔧 Features

### 👥 User Roles:
- **Admin**
  - Manages donors, receivers, blood inventory
  - Approves or rejects users
- **Donor**
  - Registers, submits medical information
  - Receives and responds to blood requests
- **Receiver**
  - Requests blood from specific donors or blood groups
  - Monitors approval status

### ✅ Donor Registration & Verification
- Donors sign up and await admin verification
- Verified donors display a ✅ tick symbol
- Unverified donors are labeled as "Unverified"

### 🩺 Medical Information Management
- Donors submit health data
- Admin reviews for eligibility

### 🧾 Blood Request System
- Receivers request blood by group or name
- Donors are notified if requested

### 📊 Admin Dashboard
- View & manage users, requests, status updates, and inventory

### 🔐 Authentication & Authorization
- Secure login/signup for all users
- Role-based access and password hashing

---

## 🛠️ Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | HTML5, CSS3, Bootstrap 5, JavaScript |
| Backend    | Node.js, Express.js    |
| Database   | MySQL                 |
| Version Control | Git, GitHub     |
| APIs       | RESTful Routes         |

---

## 🚀 Future Enhancements

- SMS/Email Notifications for requests
- Search/filter by blood group or donor location
- Mobile Responsive Design
- Hospital/Blood Bank integration

---

## 📁 Project Structure (Example)

blood-donation-system/
│
├── server.js
├── package.json
├── /routes
├── /controllers
├── /models
├── /public
│ ├── /css
│ ├── /js
│ └── /images
├── /views
└── README.md


---

## 🙌 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).



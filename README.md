# 🛒 Grocery Mart – Full Stack E-Commerce Web Application

A full-stack Grocery Mart web application that allows users to register, log in, browse grocery products, and manage their shopping cart. The project is built using **React.js** for the frontend, **Node.js** and **Express.js** for the backend, and **MongoDB** for data storage.

---

## 📌 Features

### User Module

* User Registration
* User Login
* Secure Password Hashing using BCrypt
* JWT-based Authentication

### Product Module

* View Grocery Products
* Add New Products
* Product Details

### Shopping Cart Module

* Add Products to Cart
* View Cart
* Remove Products from Cart
* Clear Cart

### General Features

* Responsive User Interface
* RESTful API Architecture
* MongoDB Database Integration
* Client-Server Communication using Axios

---

# 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6)
* HTML5
* CSS3
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* BCrypt
* Dotenv
* CORS

### Tools

* Git
* GitHub
* VS Code / Eclipse (if applicable)

---

# 📂 Project Structure

```
Grocery-Mart/
│
├── Grocery-Mart-frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── Grocery-Mart-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ System Architecture

```
User
   │
   ▼
React Frontend
   │
Axios
   │
REST API
   │
Express.js
   │
Controllers
   │
Mongoose
   │
MongoDB
```

---

# 📁 Database Collections

### User

| Field        | Type            |
| ------------ | --------------- |
| name         | String          |
| email        | String          |
| password     | String (Hashed) |
| address      | String          |
| mobilenumber | String          |

### Item

| Field       | Type   |
| ----------- | ------ |
| name        | String |
| description | String |
| category    | String |
| price       | Number |
| image       | String |

### Cart

| Field     | Type     |
| --------- | -------- |
| userId    | ObjectId |
| cartItems | Array    |
| itemId    | ObjectId |
| quantity  | Number   |

---

# 🔗 REST API Endpoints

## Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |

---

## Products

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/api/items` | Get all products |
| POST   | `/api/items` | Add a product    |

---

## Cart

| Method | Endpoint                           | Description           |
| ------ | ---------------------------------- | --------------------- |
| GET    | `/api/cart/:userId`                | Get user cart         |
| POST   | `/api/cart`                        | Add item to cart      |
| DELETE | `/api/cart/remove/:userId/:itemId` | Remove item from cart |
| DELETE | `/api/cart/clear/:userId`          | Clear cart            |

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/grocery-mart.git
cd grocery-mart
```

---

## 2. Backend Setup

```bash
cd Grocery-Mart-backend

npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm start
```

or

```bash
node server.js
```

---

## 3. Frontend Setup

```bash
cd Grocery-Mart-frontend

npm install

npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

# 🔄 Application Workflow

1. User registers through the Registration page.
2. Backend validates user details.
3. Password is hashed using BCrypt.
4. User information is stored in MongoDB.
5. User logs in with email and password.
6. Backend verifies credentials.
7. JWT token is generated and returned.
8. Frontend stores the token in Local Storage.
9. User browses grocery products.
10. Products can be added or removed from the shopping cart.
11. Cart data is stored and retrieved from MongoDB using REST APIs.

---

# 🔒 Security Features

* Password Hashing using BCrypt
* JWT Authentication
* Environment Variables using Dotenv
* CORS Configuration
* Backend Input Validation

---

# 🚀 Future Enhancements

* Online Payment Integration (Razorpay/Stripe)
* Order Placement and Order History
* Product Search and Filtering
* Wishlist Functionality
* Admin Dashboard
* Inventory Management
* Product Reviews and Ratings
* Email Notifications
* User Profile Management
* Discount Coupons
* Responsive UI Enhancements
* Cloud Deployment (Vercel, Render, MongoDB Atlas)

---

# 📸 Screenshots

Add screenshots of:

* Home Page
* Login Page
* Registration Page
* Product Listing
* Shopping Cart

Example:

```
screenshots/
├── home.png
├── login.png
├── register.png
├── products.png
└── cart.png
```

---

# 📚 Learning Outcomes

Through this project, I gained practical experience in:

* Full Stack Web Development
* React.js
* Node.js & Express.js
* REST API Development
* MongoDB Database Design
* JWT Authentication
* Password Security with BCrypt
* API Integration using Axios
* CRUD Operations
* Git & GitHub Version Control

---

# 👩‍💻 Author

**N. Mahalakshmi**

Computer Science and Engineering Graduate

Interested in:

* Java Development
* Full Stack Development
* Backend Development
* Problem Solving

# 🏎️ F1 Streetwear — Minimal E-Commerce Prototype

A complete frontend prototype of a Formula 1–inspired streetwear brand's e-commerce experience, focusing on UX clarity, structured navigation, and streamlined authentication.

---

## ✅ Completed Task Overview

### ✅ 1. Home Page
- Hero section with **"View All"** button → navigates to product listing.
- Category section:
  - Lists 5 categories: Tees, Jackets, Caps, Accessories, Limited.
  - **Tees** category is functional and links to Category Page.
  - Others are styled placeholders.

### ✅ 2. Category Page (Tees)
- Grid layout of products (with placeholder images).
- Clicking any product opens its **Product Page**.

### ✅ 3. Product Page
- Includes:
  - **Search input** with live filtering.
  - Displays only matching items.
  - If no results: shows empty message + keeps matching results visible.
  - Full empty state UI if no matches at all.

### ✅ 4. Cart Page
- Items listed with:
  - Quantity adjustment.
  - Subtotal placeholder.
  - Checkout CTA (functionality not required).

### ✅ 5. Authentication
- **Login Page** using OTP sent to email.
- **Signup Page**
- **Forgot Password Page**:
  - User receives OTP via email.
  - After OTP verification → Reset Password form.
  - Data is stored and updated in **Google Sheets**.

---

## 📁 Project Folder Structure

```yaml
F1 STREETWEAR/
│
├── assets/
│   ├── *.jpg                  # Product images
│
├── Auth/
│   ├── auth.css              # Styles for auth pages
│   ├── auth.js               # JS for OTP, password reset
│   ├── forgot.html
│   ├── login.html
│   ├── reset.html
│   └── signup.html
│
├── Category/
│   ├── Category.css
│   ├── Category.html
│   └── Category.js
│
├── scripts/
│   ├── cart.css
│   ├── cart.html
│   ├── cart.js
│   ├── home.css
│   ├── home.html
│   └── home.js
│
└── README.md
    





---

## 🧠 Tech Stack

| Part              | Tool / Tech                    |
|-------------------|-------------------------------|
| Frontend          | HTML, CSS, JS                 |
| Backend (OTP)     | Google Apps Script            |
| Data Storage      | Google Sheets                 |
| Prototyping Goal  | Framer-style lightweight build|

---

## 🔌 Google Sheets (Data Storage)

### Sign-In Data Sheet  
📄 [Link](https://docs.google.com/spreadsheets/d/1xfFaepDcbPObmgYQnW3IajyLQHGm9MBffeYoaBTzM5A/edit?usp=sharing)

### Reset Password Sheet  
📄 [Link](https://docs.google.com/spreadsheets/d/1UZ2VR8U5k03L1eidlQuQmKLZGLYbP_O2OXa1Wxrcoy8/edit?usp=sharing)

---

## 🚀 Google Apps Script Deployments

### 🔐 OTP / Sign-In Script
🌐 [Web App URL](https://script.google.com/macros/s/AKfycbwo6TkqqanT3oDSKH-tvax2j2ARGourQd7jbjwpjbj6cWSUCXMRePJkftyT_ZhdAfs/exec)

### 🔁 Password Reset Script
🌐 [Reset Web App](https://script.google.com/macros/s/AKfycbx40SIz3YBCmrfON2W4v6cRPGf86WUx_onbR4fLwpdqfRUsQRo4b89N2-Xt11X1JoVO/exec)

---

## 🛠️ How To Use

1. Clone/download this repo.
2. Run using **Live Server** in VS Code.
3. Update any Apps Script URLs inside `auth.js`.
4. Set up Google Sheets as per the structure.

---

## 📸 Screens & Flow

- ✅ Homepage → View All → Tees Category
- ✅ Product View + Search
- ✅ Cart + Quantity + Subtotal
- ✅ Login → OTP → Reset Password
- ✅ Data sync with Google Sheets

---

## 🧑‍💻 Made By

**Nandini Pingalkar**  
📧 Email: `pingalkarnandini2024@gmail.com`

---

## 📄 License

Free to use for educational and demo purposes.

---


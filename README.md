# Mango Selling E-Commerce Platform 🍋🥭

## Project Overview
Mango E-Commerce is an online platform designed for selling mango products. It provides a seamless shopping experience for users while offering an admin dashboard for managing products and orders efficiently. The platform ensures secure role-based authentication and payment processing via **SSL Commerz**.

## Key Features 🚀

### Admin Features
- **Product Management**: Admin can upload, update, and delete mango products.  
- **Order Management**: Admin can update order status (**Pending, Completed, Cancelled**).  
- **Email Notifications**:  
  - When an order is placed, both the **buyer** and **seller (admin)** receive an **order details email**. 📧  
  - When an order status is updated to **Completed** or **Cancelled**, an email is sent to the user. 📧  
  - Upon successful **user registration**, a confirmation email is sent. 📧  
- **Admin Dashboard**: A centralized dashboard to manage users, products, and orders efficiently.  

### User Features
- **Authentication & Authorization**:  
  - Users can **register, log in, and log out** securely. 🔑  
  - Role-based authentication ensures restricted access to admin functionalities.  
- **Product Browsing & Search**:  
  - Users can view all available mango products. 🥭  
  - A search functionality allows users to find specific products easily. 🔍  
- **Shopping Cart**: Users can add mango products to their cart. 🛒  
- **User Dashboard**: Users can view and manage their personal details and order history.  
- **Order Placement & Email Notification**:  
  - When a user places an order, both the **buyer** and the **admin** receive an email with order details. 📧  
  - Users can track their orders from the dashboard.  
- **Secure Payment**: Users can purchase mangoes using **SSL Commerz** for secure transactions. 💳

## Technology Stack
- **Frontend**: React.js (for dynamic UI)  
- **Backend**: Django & Django REST Framework (for API development)  
- **Database**: PostgreSQL / MySQL  
- **Authentication**: Django Authentication & Role-Based Access Control  
- **Payment Gateway**: SSL Commerz  
- **Email Service**: Django Email (SMTP)

---

This project ensures an efficient and smooth mango-selling experience for both admins and customers. 🚀🥭

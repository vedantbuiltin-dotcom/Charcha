<h1 align="center">✨ Charcha - Full-Stack Real-Time Chat App ✨</h1>

<p align="center">
  A modern, full-stack real-time chat application built with the MERN stack and Socket.io. Charcha (meaning "discussion" or "chat") provides a seamless messaging experience with custom authentication, real-time presence, media sharing, and beautiful UI.
</p>

## 🌟 Highlights & Features

- **🔐 Custom JWT Authentication:** Secure login and registration without relying on 3rd-party auth providers.
- **⚡ Real-time Messaging:** Instant message delivery powered by **Socket.io**.
- **🟢 Live Presence Indicators:** See who is online or offline in real-time.
- **🔔 Interactive Experience:** Notification and typing sounds (with user toggle options).
- **📨 Automated Emails:** Welcome emails sent on signup using **Resend**.
- **🗂️ Media Sharing:** Seamless image uploads and sharing integrated with **Cloudinary**.
- **🧰 Robust API:** RESTful architecture built with **Node.js** and **Express**.
- **🧱 Data Persistence:** Reliable data storage using **MongoDB**.
- **🚦 Security & Rate-Limiting:** API rate-limiting powered by **Arcjet** to prevent abuse.
- **🎨 Beautiful UI:** Modern, responsive design using **React**, **Tailwind CSS**, and **DaisyUI**.
- **🧠 State Management:** Efficient client-side state handling with **Zustand**.
- **🚀 Production Ready:** Designed for easy deployment (free-tier friendly with platforms like Sevalla, Render, or Railway).

---

## 📁 Project Structure

The repository is structured as a monorepo containing both the frontend and backend applications:

```text
Charcha/
├── backend/       # Node.js + Express API + Socket.io Server
├── frontend/      # React + Vite + Tailwind CSS Client App
└── package.json   # Root package file for managing the monorepo
```

---

## 🛠️ Technology Stack

### Frontend
- **React (Vite):** Fast UI development and rendering.
- **Tailwind CSS & DaisyUI:** Rapid, utility-first styling with pre-built components.
- **Zustand:** Lightweight global state management.
- **Socket.io-client:** Real-time bi-directional communication.

### Backend
- **Node.js & Express:** Server environment and API framework.
- **MongoDB & Mongoose:** NoSQL database and object modeling.
- **Socket.io:** Real-time event engine.
- **Cloudinary:** Cloud storage for image uploads.
- **Resend:** Transactional email delivery.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Atlas or local instance)
- Cloudinary Account
- Resend Account (for email delivery)

### 1. Environment Setup

Create a `.env` file in the `backend/` directory using the following template:

```env
# Server
PORT=3000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database
MONGO_URI=your_mongo_uri_here

# Authentication
JWT_SECRET=your_jwt_secret

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

# Media (Cloudinary)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Security
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

### 2. Installation & Running Locally

You will need to install dependencies and run both the backend and frontend servers.

**Backend Server**
```bash
cd backend
npm install
npm run dev
```
*The backend API will run on `http://localhost:3000`.*

**Frontend Client**
```bash
cd frontend
npm install
npm run dev
```
*The React application will run on `http://localhost:5173`.*

---

## 🤝 Contributing

We follow a standard Git & GitHub workflow for contributions:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

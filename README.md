<div align="center">

# 💬 Charcha

### Full-Stack Real-Time Chat App

*"Charcha" means discussion — a seamless messaging experience with custom auth, real-time presence, media sharing, and a beautiful UI.*

[![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Tailwind%20%2B%20DaisyUI-14b8a6?style=for-the-badge&logo=react&logoColor=white)](#)
[![Backend](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-0f766e?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Realtime](https://img.shields.io/badge/Realtime-Socket.io-14b8a6?style=for-the-badge&logo=socket.io&logoColor=white)](#)
[![Database](https://img.shields.io/badge/Database-MongoDB-0f766e?style=for-the-badge&logo=mongodb&logoColor=white)](#)

</div>

---

## 📖 Table of Contents

- [Highlights & Features](#-highlights--features)
- [Project Structure](#-project-structure)
- [Tech Stack](#️-technology-stack)
- [Getting Started](#-getting-started)
- [Environment Setup](#1-environment-setup)
- [Running Locally](#2-installation--running-locally)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Highlights & Features

<table>
<tr>
<td width="50%" valign="top">

**🔐 Custom JWT Authentication**
Secure login and registration, no third-party auth providers.

**⚡ Real-time Messaging**
Instant message delivery powered by **Socket.io**.

**🟢 Live Presence Indicators**
See who's online or offline in real time.

**🔔 Interactive Experience**
Notification and typing sounds, with user toggle options.

**📨 Automated Emails**
Welcome emails on signup, sent via **Resend**.

**🗂️ Media Sharing**
Seamless image uploads integrated with **Cloudinary**.

</td>
<td width="50%" valign="top">

**🧰 Robust API**
RESTful architecture built with **Node.js** and **Express**.

**🧱 Data Persistence**
Reliable storage using **MongoDB**.

**🚦 Security & Rate-Limiting**
API rate-limiting powered by **Arcjet** to prevent abuse.

**🎨 Beautiful UI**
Modern, responsive design with **React**, **Tailwind CSS**, and **DaisyUI**.

**🧠 State Management**
Efficient client-side state handling with **Zustand**.

**🚀 Production Ready**
Free-tier friendly deployment on Sevalla, Render, or Railway.

</td>
</tr>
</table>

---

## 📁 Project Structure

A monorepo containing both the frontend and backend applications:

```text
Charcha/
├── backend/       # Node.js + Express API + Socket.io Server
├── frontend/      # React + Vite + Tailwind CSS Client App
└── package.json   # Root package file for managing the monorepo
```

---

## 🛠️ Technology Stack

<div align="center">

| Layer | Technology | Purpose |
|:-----:|:-----------|:--------|
| 🎨 **Frontend** | React (Vite) | Fast UI development and rendering |
| 🎨 **Frontend** | Tailwind CSS & DaisyUI | Rapid, utility-first styling with pre-built components |
| 🧠 **Frontend** | Zustand | Lightweight global state management |
| ⚡ **Frontend** | Socket.io-client | Real-time bi-directional communication |
| ⚙️ **Backend** | Node.js & Express | Server environment and API framework |
| 🗄️ **Backend** | MongoDB & Mongoose | NoSQL database and object modeling |
| ⚡ **Backend** | Socket.io | Real-time event engine |
| 🖼️ **Backend** | Cloudinary | Cloud storage for image uploads |
| ✉️ **Backend** | Resend | Transactional email delivery |

</div>

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (Atlas or local instance)
- Cloudinary account
- Resend account (for email delivery)

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

You'll need to install dependencies and run both the backend and frontend servers.

<table>
<tr>
<td width="50%">

**Backend Server**
```bash
cd backend
npm install
npm run dev
```
📍 Runs on `http://localhost:3000`

</td>
<td width="50%">

**Frontend Client**
```bash
cd frontend
npm install
npm run dev
```
📍 Runs on `http://localhost:5173`

</td>
</tr>
</table>

---

## 🤝 Contributing

We follow a standard Git & GitHub workflow for contributions:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License — see the `LICENSE` file for details.

---

<div align="center">

**Where every discussion finds its place.**

⭐ Star this repo if Charcha made your chat app dreams come true!

</div>

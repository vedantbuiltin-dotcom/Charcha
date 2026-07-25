## Charcha

Charcha is a real-time chat application built for seamless, modern messaging with rich media support.

### Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express
- **Real-time Communication:** Socket.io
- **Database:** MongoDB

### Features
- Real-time one-on-one and group messaging
- Group chat with admin controls
- Message forwarding across chats
- Built-in media editor (crop, draw, add text/stickers) for images before sending
- Mobile-responsive UI optimized for touch interactions
- Live message delivery and read receipts via Socket.io

### Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd charcha

# Install dependencies (client & server)
cd client && npm install
cd ../server && npm install

# Set up environment variables
# Create a .env file in /server with your MongoDB URI, JWT secret, etc.

# Run the app
cd server && npm run dev
cd client && npm run dev

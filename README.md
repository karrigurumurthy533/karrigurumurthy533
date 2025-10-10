# Stateful Authentication Project

This project demonstrates **stateful authentication** using Node.js, Express, MongoDB, and EJS.  
It handles user login sessions using cookies, allowing users to remain logged in across multiple requests until they log out.

## Features

- **User Registration & Login**  u
  Users can sign up and log in with a username and password.  

- **Stateful Sessions**  
  Sessions are stored on the server using `express-session` and `connect-mongodb-session`. Cookies are used to track logged-in users.  

- **Protected Routes**  
  Certain routes are accessible only to authenticated users (e.g., Dashboard).  

- **Logout Functionality**  
  Users can safely log out, clearing their session.  

## Technologies Used

- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **EJS** (Templating engine)  
- **Tailwind CSS** (Optional styling)  
- **express-session & connect-mongodb-session** (For session management)  

## Project Structure


project/
│
├─ models/
│ └─ User.js # User schema
│
├─ controllers/
│ └─ authController.js # Authentication logic
│
├─ routes/
│ └─ authRoutes.js # Login, signup, logout routes
│
├─ views/
│ ├─ login.ejs
│ ├─ signup.ejs
│ └─ dashboard.ejs
│
├─ public/
│ └─ css/ # Static styles
│
├─ server.js # Main server file
└─ package.json


## Installation

##1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo


Install dependencies:

npm install


Create a .env file:

MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
PORT=5000


Run the server:

npm start


Open your browser and navigate to:

http://localhost:5000


## How Stateful Authentication Works

1. **Login**: User enters credentials. Server validates and creates a session.  
2. **Session Storage**: Session info is stored in MongoDB via `connect-mongodb-session`.  
3. **Cookie Management**: A session cookie is sent to the client.  
4. **Access Protected Routes**: Server checks session on each request.  
5. **Logout**: Session is destroyed and cookie cleared.  

---

## Contributing

Contributions are welcome! You can:

1. Fork the repository  
2. Create a new branch:  
   ```bash
   git checkout -b feature/YourFeature


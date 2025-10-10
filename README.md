# Stateful Authentication Project

This project demonstrates **stateful authentication** using Node.js, Express, MongoDB, and EJS.  
It handles user login sessions using cookies, allowing users to remain logged in across multiple requests until they log out.

## Features

- **User Registration & Login**  
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


# 📚 Course Selling App

A full-stack web application where **admins** can create and manage courses, and **users** can purchase and view courses.  
Built with **Node.js, Express, MongoDB, JWT**, and a simple frontend (React/EJS/DOM).

---

## 🚀 Features

### 👤 User
- Signup & Login
- Browse all courses
- Purchase courses
- View purchased courses

### 🛠️ Admin
- Signup & Login
- Create new courses
- Delete courses
- Add course content
- Manage existing courses

---

## 🏗️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT (or cookies for good-to-have)
- **Environment Variables:** dotenv
- **Frontend:** React (or EJS/DOM for quick demos)

---

## 📂 Project Structure
course-selling-app/
├── index.js # Entry point
├── routes/
│ ├── user.js # User routes
│ ├── admin.js # Admin routes
├── middlewares/
│ ├── authUser.js # User auth middleware
│ ├── authAdmin.js # Admin auth middleware
├── models/
│ ├── User.js
│ ├── Admin.js
│ ├── Course.js
│ ├── Purchase.js
├── frontend/ # React / EJS / DOM frontend
├── .env # DB connection string & secrets
└── package.json

yaml
Copy code

---

## 🗄️ Database Schema

### User
```js
{
  username: String,
  password: String,
  purchasedCourses: [ObjectId]
}
Admin
js
Copy code
{
  username: String,
  password: String
}
Course
js
Copy code
{
  title: String,
  description: String,
  price: Number,
  content: String
}
Purchase
js
Copy code
{
  userId: ObjectId,
  courseId: ObjectId,
  purchaseDate: Date
}
🔑 Routes
User Routes
POST /user/signup → User signup

POST /user/login → User login

GET /user/courses → Get all courses

POST /user/courses/:id → Purchase a course

GET /user/purchased → Get all purchased courses

Admin Routes
POST /admin/signup → Admin signup

POST /admin/login → Admin login

POST /admin/courses → Create a course

DELETE /admin/courses/:id → Delete a course

PUT /admin/courses/:id/content → Add course content

⚙️ Setup & Installation
Clone the repo:

bash
Copy code
git clone https://github.com/yourusername/course-selling-app.git
cd course-selling-app
Install dependencies:

bash
Copy code
npm install
Create a .env file:

env
Copy code
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
Start the server:

bash
Copy code
node index.js
🎯 Good-to-Haves
 Use cookies instead of JWT for authentication

 Add a rate limiting middleware to protect routes

 Create a frontend in EJS (server-side rendering)

 Create a frontend in React for a modern UI

 Minimal DOM manipulation version for demo purposes


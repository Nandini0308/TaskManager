# Task Manager App

A full-stack Task Manager application built with **React** (Frontend), **Express.js** (Backend), and **MongoDB** (Database). This app allows users to create, read, update, and delete (CRUD) tasks, set priorities, due dates, and mark tasks as completed.

## 🚀 Features

- User-friendly UI built with React
- RESTful API with Express.js
- Task CRUD operations
- Set priority, due date, and status (Pending, In Progress, Completed)
- Responsive and mobile-friendly
- MongoDB for data storage
- Error handling and validation

## 🛠 Tech Stack

- **Frontend**: React, Axios, TailwindCSS / CSS Modules (optional)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Other Tools**: Postman (for API testing), Git, npm/yarn

## 📁 Project Structure

```
/client       --> React frontend
/server       --> Express backend
  |-- models     --> Mongoose schemas
  |-- routes     --> API route handlers
  |-- controllers--> Business logic
  |-- config      --> DB connection setup
```

## 🧩 Installation

### Prerequisites

- Node.js and npm
- MongoDB (local or cloud like MongoDB Atlas)

### Clone the repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
```

### Setup Backend

```bash
cd server
npm install
# Add .env with MONGO_URI and PORT
npm run dev
```

### Setup Frontend

```bash
cd client
npm install
npm start
```

## 🌐 API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 📌 Future Improvements

- User authentication (JWT)
- Task categories/labels
- Drag-and-drop task ordering
- Reminders and notifications

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

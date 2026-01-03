# React + Express Full-Stack Application

A modern full-stack web application built with React (Vite) frontend and Express.js backend, featuring JWT authentication, MongoDB database, and Ant Design UI components.

## 🚀 Tech Stack

### Frontend

- **React 19** - Modern UI library
- **Vite 7** - Fast build tool and dev server
- **React Router DOM 7** - Client-side routing
- **TanStack React Query 5** - Data fetching and caching
- **Ant Design 6** - UI component library
- **ESLint** - Code linting

### Backend

- **Express.js 4** - Web framework
- **MongoDB + Mongoose 8** - Database and ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Winston** - Logging
- **Cookie Parser** - Cookie handling

## 📁 Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── app/            # App configuration
│   │   ├── assets/         # Static assets
│   │   ├── components/     # Reusable UI components
│   │   ├── config/         # Frontend config
│   │   ├── features/       # Feature modules (auth, etc.)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and API client
│   │   └── utils/          # Helper functions
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── api/            # Routes and middlewares
│   │   ├── config/         # Configuration
│   │   ├── jobs/           # Background jobs
│   │   ├── loaders/        # App initialization
│   │   ├── models/         # Mongoose models
│   │   ├── services/       # Business logic
│   │   └── subscribers/    # Event handlers
│   ├── .env.example
│   └── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "React + Express"
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**

   ```bash
   cd ../backend
   cp .env.example .env
   ```

   Edit `.env` with your configuration:

   ```env
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/React
   FRONTEND_URL=http://localhost:5173
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=7d
   API_PREFIX=/api
   LOG_LEVEL=debug
   ```

### Running the Application

1. **Start the backend server**

   ```bash
   cd backend
   npm run dev
   ```

   Backend runs at: `http://localhost:3000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs at: `http://localhost:5173`

## 📜 Available Scripts

### Frontend

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

### Backend

| Command       | Description                     |
| ------------- | ------------------------------- |
| `npm run dev` | Start with hot reload (nodemon) |
| `npm start`   | Start production server         |

## 🔒 Features

- **User Authentication** - Register, login, and secure routes with JWT
- **Protected Routes** - Frontend route guards with authentication
- **API Middleware** - Request validation and error handling
- **Logging** - Structured logging with Winston
- **Modern UI** - Responsive design with Ant Design components

## 🔗 API Endpoints

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| `GET`  | `/status`            | Health check      |
| `POST` | `/api/auth/register` | User registration |
| `POST` | `/api/auth/login`    | User login        |
| `POST` | `/api/auth/logout`   | User logout       |
| `GET`  | `/api/auth/me`       | Get current user  |

## 📝 License

This project is licensed under the MIT License.

project/
├── backend/                  # Backend code (Node.js/Express.js)
│   ├── databaseModel/        # Mongoose models
│   │   └── userModel.js
|   |
│   ├── controllers/          # Route handler functions (e.g., add, edit, read)
│   │   └── userController.js
|   |
│   ├── routes/               # Define routes for the application
│   │   └── userRoutes.js
|   |
│   ├── server.js             # Entry point for starting the backend server
│   └── package.json          # Node.js dependencies and scripts
│
├── frontend/                 # Frontend code (React)
│   ├── public/               # Static assets (e.g., favicon, index.html)
│   ├── src/                  # Source files for React
│   │   ├── components/       # Reusable React components
│   │   │   ├── Header.js
|   |   |
│   │   ├── pages/            # Page-level components
│   │   │   ├── HomePage.jsx
│   │   │   ├── AddUser.jsx
│   │   │   ├── DeleteUser.jsx
│   │   │   └── ReadUser.jsx
|   |   |
│   │   ├── App.js            # Main React application logic
│   │   ├── index.js          # Entry point for React
│   └── package.json          # React dependencies and scripts
│
├── .gitignore                # Files and folders to ignore in Git
├── README.md                 # Project documentation
└── package.json              # Root-level dependencies and scripts

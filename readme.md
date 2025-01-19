# How to Run
1. type your mongo URL in MongoDB_URL of .env file
2. **Got to backend folder**
   - npm i
   - nodemon server.js
3. **Go To FrontEnd and then React Folder**
   - npm i
   - npm run dev

# project FLow
project/
├── backend/                  # Backend code (Node.js/Express.js)
│   ├── databaseModel/        # Mongoose models
│   │   └── userModel.js
│   ├── controllers/          # Route handler functions (e.g., add, edit, read)
│   │   └── userController.js
│   ├── routes/               # API route definitions
│   │   └── userRoutes.js
│   ├── server.js             # Entry point for the backend server
│   └── package.json          # Backend dependencies and scripts
│
├── frontend/                 # Frontend code (React)
│   ├── public/               # Static assets (e.g., favicon, index.html)
│   ├── src/                  # Source files for the React app
│   │   ├── components/       # Reusable React components
│   │   │   └── Header.js
│   │   ├── pages/            # Page-level components
│   │   │   ├── HomePage.jsx
│   │   │   ├── AddUser.jsx
│   │   │   ├── DeleteUser.jsx
│   │   │   └── ReadUser.jsx
│   │   ├── App.js            # Main React application file
│   │   └── index.js          # Entry point for rendering the React app
│   └── package.json          # Frontend dependencies and scripts
│
├── .gitignore                # Files and folders to exclude from Git
├── README.md                 # Project documentation
└── package.json              # Root-level dependencies and scripts

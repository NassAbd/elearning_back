// server's main configuration

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const courseRoute = require('./routes/courseRoute');
const quizRoute = require('./routes/quizRoute');

// Connect to MongoDB
const app = express();
connectDB();

// middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());

// Define routes
app.use('/api/courses', courseRoute);
app.use('/api/quizzes', quizRoute);

module.exports = app;
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
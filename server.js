// Express
const express = require('express');
const app = express();

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use(express.static('client/build'));
app.use('/api/auth', require('./routes/auth/router'));

// Listening port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

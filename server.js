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
// app.use('/api/crud', require('./routes/crud/crud'));
// app.use('/api/register', require('./routes/auth/register'));
// app.use('/api/auth', require('./routes/auth/auth'));
// app.use('/api/protected', require('./routes/auth/protected'));
// app.use('/api/passwordreset', require('./routes/auth/reset'));
// app.use('/api/update', require('./routes/auth/update'));
app.use('/api/auth', require('./routes/auth/router'));

// Listening port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

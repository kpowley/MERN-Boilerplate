// Express
const express = require('express');
const router = express.Router();

// /api/auth routes
router.use('/', require('./auth'));
router.use('/register', require('./register'));
router.use('/reset', require('./reset'));
router.use('/update', require('./update'));

module.exports = router;

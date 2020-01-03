// Packages
const express = require('express');
const router = express.Router();

// @route:  GET /api
// @desc:   Return plain text string
// @access: Public
router.get('/', (req, res) => {
  res.json({ text: 'Hello MERN' });
});

module.exports = router;

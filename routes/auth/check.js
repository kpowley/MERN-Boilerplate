// Packages
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.middleware');

// Mongoose model
const User = require('../../models/User');

// @route   GET api/auth/check
// @desc    Verify token
// @access  Public
// @req     'x-auth-token': localStorage.token
// @res     {
//          _id: "123456789",
//          email: "user@email.com",
//          date: "01/01/2000"
//          }
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

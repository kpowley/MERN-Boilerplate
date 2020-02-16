const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.middleware');

const User = require('../../models/User');

// @route   GET api/protected
// @desc    Verify token
// @access  Public
// @req     'x-auth-token': localStorage.token
// @res     {
//          _id: "123456789",
//          email: "user@email.com",
//          password: "encryptedpassword"
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

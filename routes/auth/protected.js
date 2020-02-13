const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.middleware');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Verify token
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.state(500).send('Server error');
  }
});

module.exports = router;

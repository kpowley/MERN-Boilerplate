// Packages
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const auth = require('../../middleware/auth.middleware');

// Mongoose model
const User = require('../../models/User');

// @route   POST api/auth/update
// @desc    Update user data
// @access  Private
// @req     'x-auth-token': localStorage.token
//          updates: { "email": "new@email.com", "name": "New Name"}
// @res     'Information updated'
router.post('/', auth, async (req, res) => {
  try {
    for (var key in req.body.updates) {
      if (key === 'password') {
        delete req.body.updates[key];
      }
    }
    // Find and update the item in the database
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $set: req.body.updates },
      { new: true }
    );

    // Save item and return new saved item
    await updatedUser.save();
    res.send('Information updated');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/auth/update/password
// @desc    Update user data
// @access  Private
// @req     'x-auth-token': localStorage.token
//          {password: "NewPassword"}
// @res     'Password updated'
router.post(
  '/password',
  auth,
  [
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const { password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const newPassword = await bcrypt.hash(password, salt);

      // Find and update the item in the database
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.user.id },
        { password: newPassword },
        { new: true }
      );

      // Save item and return new saved item
      await updatedUser.save();
      res.send('password updated');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;

// Packages
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth.middleware');

const User = require('../../models/User');

// @route   POST api/passwordreset
// @desc    Submit email address for reset email
// @access  Public
// @req     {email: 'example@email.com'}
// @res     'reset email sent'
router.post(
  '/send',
  [check('email', 'Please include a valid email').isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          console.log(token);
          res.send('reset email sent');
        }
      );
      res.send('reset email sent');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   POST api/passwordreset
// @desc    Use token from email to set new password
// @access  Private
// @req     'x-auth-token': localStorage.token
//          { password: "NewPassword"}
// @res     'Password updated'
router.post(
  '/',
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

// Packages
const express = require('express');
const router = express.Router();

// Models
const Example = require('../../models/Example');

// @route:  GET /api
// @desc:   Return plain text string
// @access: Public
router.get('/test', (req, res) => {
  res.json({ text: 'Hello MERN' });
});

// @route:  POST /api/crud
// @desc:   Add a record to the database
// @access: Public
//
// -----> Example Post Request <-----
//
// URL:
//   'http://localhost:5000/api/crud'
//
// Header:
//   "Content-Type": "application/json"
//
// Body:
//   {
//   	"field1": "Example",
//   	"field2": 55,
//   	"field3": true
//   }
//
router.post('/', async (req, res) => {
  try {
    // Get values from request body
    const { field1, field2, field3 } = req.body;

    // Construst item
    const exampleItem = new Example({
      field1,
      field2,
      field3
    });

    // Save item and return saved item
    await exampleItem.save();
    res.json(exampleItem);
  } catch (err) {
    // Log any error and return a 500 status
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route:  GET /api/crud/
// @desc:   Get all records
// @access: Public
//
// -----> Example Get Request <-----
//
// URL:
//   'http://localhost:5000/api/crud'
//
router.get('/', async (req, res) => {
  try {
    // Get all items in the database
    const exampleItem = await Example.find();
    // Return the items
    res.json(exampleItem);
  } catch (err) {
    // Log any error and return a 500 status
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route:  GET /api/crud/id
// @desc:   Get a record by its ID
// @access: Public
//
// -----> Example Get Request <-----
//
// URL:
//   'http://localhost:5000/api/crud/5e0fd18c04798f3e29931e11'
//
router.get('/:_id', async (req, res) => {
  try {
    // Find item by ID from reqest URL paramter
    const exampleItem = await Example.findOne({
      _id: req.params._id
    });
    // Check if the item exists
    if (!exampleItem) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    // Return the item
    res.json(exampleItem);
  } catch (err) {
    // Log any error and return a 500 status
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route:  PUT /api/crud
// @desc:   Update record by ID
// @access: Public
//
// -----> Example Put Request <-----
//
// URL:
//   'http://localhost:5000/api/crud/5e0fd18c04798f3e29931e11'
//
// Header:
//   "Content-Type": "application/json"
//
// Body:
//   {
//   	"field1": "Example",
//   	"field2": 55,
//   	"field3": true
//   }
//
router.put('/:_id', async (req, res) => {
  try {
    // Get values from request body
    const { field1, field2, field3 } = req.body;

    // Construst object fields for update
    const reqObject = {};
    if (field1) reqObject.field1 = field1;
    if (field2) reqObject.field2 = field2;
    if (field3) reqObject.field3 = field3;

    // Find existing item
    const exampleItem = await Example.findOne({
      _id: req.params._id
    });

    // Check if the item exists
    if (!exampleItem) {
      return res.status(404).json({ msg: 'Item not found' });
    }

    // Find and update the item in the database
    const exampleItem2 = await Example.findOneAndUpdate(
      { _id: req.params._id },
      { $set: reqObject },
      { new: true }
    );

    // Save item and return new saved item
    await exampleItem2.save();
    res.json(exampleItem2);
  } catch (err) {
    // Log any error and return a 500 status
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route:  DELETE /api/crud
// @desc:   Delete record by id
// @access: Public
//
// -----> Example Delete Request <-----
//
// URL:
//   'http://localhost:5000/api/crud/5e0fd18c04798f3e29931e11'
//
router.delete('/:_id', async (req, res) => {
  try {
    // Find item by ID from reqest URL paramter
    const exampleItem = await Example.findOne({
      _id: req.params._id
    });
    // Check if the item exists
    if (!exampleItem) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    // Remove item from database
    await exampleItem.remove();
    res.json({ msg: 'Item deleted' });
  } catch (err) {
    // Log any error and return a 500 status
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

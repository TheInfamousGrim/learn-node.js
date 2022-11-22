const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

/* ------------------------------- Home route ------------------------------- */
router.get('/', storeController.homePage);

/* ---------------------------- Add store routes ---------------------------- */
// Main route for add store page
router.get('/add', storeController.addStore);
// POST route for the add store data
router.post('/add', storeController.addStore);

module.exports = router;

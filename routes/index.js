const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

/* ------------------------------- Home route ------------------------------- */
router.get('/', storeController.homePage);

/* ---------------------------- Add store routes ---------------------------- */
// Main route for add store page
router.get('/add', storeController.addStore);
// POST route for the add store data
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;

const express = require('express');

const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

/* ------------------------------- Home route ------------------------------- */
router.get('/', catchErrors(storeController.getStores));

/* ---------------------------- Add store routes ---------------------------- */
// Main route for add store page
router.get('/add', storeController.addStore);

// POST route for the add store data
router.post(
  '/add',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.createStore)
);

// POST route for editing store data
router.post(
  '/add/:id',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.updateStore)
);

/* ---------------------------- get stores routes --------------------------- */
// GET all store route
router.get('/stores', catchErrors(storeController.getStores));

// GET a store to edit
router.get('/stores/:id/edit', catchErrors(storeController.editStore));

module.exports = router;

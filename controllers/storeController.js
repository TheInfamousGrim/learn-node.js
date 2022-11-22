const mongoose = require('mongoose');

const Store = mongoose.model('Store');

/* ---------------------------- home controllers ---------------------------- */
exports.homePage = (req, res) => {
  res.render('index', { title: 'Home' });
};

/* ----------------------- add store page controllers ----------------------- */
exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

// Create store post route
exports.createStore = async (req, res) => {
  const store = await new Store(req.body).save();
  req.flash(
    'success',
    `Successfully Created ${store.name}. Care to leave a review?`
  );
  res.redirect(`/store/${store.slug}`);
};

/* ------------------------ update store controllers ------------------------ */
exports.updateStore = async (req, res) => {
  // find and update the store
  const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // Return the new store instead of the old one
    runValidators: true,
  }).exec();
  req.flash(
    'success',
    `Successfully updated <strong>${store.name}<strong>. <a href="/stores/${store.slug}">View Store →</a>`
  );
  res.redirect(`/stores/${store._id}/edit`);
  // Redirect them to the store and tell them it worked
};

/* ------------------------- store page controllers ------------------------- */
// Get stores
exports.getStores = async (req, res) => {
  // 1. Query the db for a list of all the stores
  const stores = await Store.find();
  res.render('stores', { title: 'Stores', stores });
};

// Edit a specific store
exports.editStore = async (req, res) => {
  // 1. Find the store given the id
  const store = await Store.findOne({ _id: req.params.id });
  // 2. we need to confirm they are the owner of the store
  // TODO
  // 3. Render out the edit form so the user can update their store
  res.render('editStore', { title: `Edit ${store.name}`, store });
};

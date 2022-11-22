const mongoose = require('mongoose');
const Store = mongoose.model('Store');

/* ---------------------------- home controllers ---------------------------- */
exports.homePage = (req, res) => {
    res.render('index', { title: 'Home' });
}

/* ----------------------- add store page controllers ----------------------- */
exports.addStore = (req, res) => {
    res.render('editStore', { title: 'Add Store' });
}

// Create store post route
exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`)
    res.redirect(`/store/${store.slug}`);
}

/* ------------------------- store page controllers ------------------------- */
exports.getStores = async (req, res) => {
    // 1. Query the db for a list of all the stores
    const stores = await Store.find();
    res.render('stores', { title: 'Stores', stores })
}
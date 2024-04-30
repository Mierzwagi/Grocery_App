const express = require('express');
const shop = require( '../controllers/shopController.js' );
const router = express.Router();
const isAuth = require('../middleware/isAuth.js')

//router.post("/add-cart", isAuth, shop.addCart );

module.exports = routes
const express = require('express');
const products = require( '../controllers/productControllers.js' );
const router = express.Router();
const isAuth = require('../middleware/isAuth.js')

router.post('/products', isAuth, products.creatProducts)
router.get('/products', isAuth, products.getProducts)
router.post('/categoria', isAuth, products.createCategories)
router.get('/categoria', isAuth, products.getCategorias)

module.exports = router;
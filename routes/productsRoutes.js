const express = require('express');
const products = require( '../controllers/productControllers.js' );
const router = express.Router();

router.post('/products', products.creatProducts)
router.get('/products', products.getProducts)
router.post('/categoria', products.createCategories)
router.get('/categoria', products.getCategorias)

module.exports = router;
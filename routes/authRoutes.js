const express = require('express');
const authtest = require( '../controllers/authControllers.js' );
const router = express.Router();

router.post('/signup', authtest.signUpUser)

module.exports = router;
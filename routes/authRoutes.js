const express = require('express');
const auth = require( '../controllers/authControllers.js' );
const { validateEmail, validateName, validatePassword } = require('../services/validator.js');
const router = express.Router();

router.post('/signup', [validateEmail, validateName, validatePassword], auth.signUpUser)

module.exports = router;
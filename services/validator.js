const { check } = require('express-validator');

module.exports = {
    validateEmail: check('email')
    .isEmail()
    .withMessage('Please provide a valid email address'),

    validateName: check('name')
    .isLength({min: 8})
    .withMessage('Name must be at least 8 characters long'),

    validatePassword: check('password')
    .isLength({min: 8})
    .withMessage('Password must be at least 8 characters long'),
}
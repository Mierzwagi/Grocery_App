const express = require( 'express-validator');
const bcrypt = require( 'bcrypt');
const jwt = require( 'jsonwebtoken');

express.signUpUser = (req, res, next) => {
    const {email, name, passworld} = req.body;

    bcrypt.hash(passworld, 12).then(passUser =>{
        
    })

}
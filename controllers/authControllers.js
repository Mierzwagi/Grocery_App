//const express = require( 'express-validator');
const bcrypt = require('bcrypt');
//const jwt = require( 'jsonwebtoken');

exports.signUpUser = (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const passworld = req.body.passworld;

    res.status(200).json({
        user: {
            email: email,
            name: name,
            passworld: passworld
        }
    })

}
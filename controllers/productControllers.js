const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = require("../routes/userRoutes");
const { where } = require("sequelize");
//const jwt = require( 'jsonwebtoken');

exports.getProducts = (rew, res, next) => {

}

exports.creatProducts = (rew, res, next) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res
            .status(422)
            .send({ error: true, message: errors.array()[0].msg });
    }



}

exports.createCategories = (rew, res, next) => {

}

exports.favProduct = (rew, res, next) => {

}
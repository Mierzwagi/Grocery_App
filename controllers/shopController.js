const { validationResult } = require("express-validator");
const Products = require("../models/products");
const Cart = require("../models/carrinho");
const Favoritos = require("../models/favoritos");
const { findById } = require("../models/user");


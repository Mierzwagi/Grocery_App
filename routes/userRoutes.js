const express = require("express");
const auth = require("../controllers/userControllers.js");
const products = require("../controllers/productControllers.js");
const {
  validateEmail,
  validateName,
  validatePassword,
} = require("../services/validator.js");
const router = express.Router();

router.post(
  "/signup",
  [validateEmail, validateName, validatePassword],
  auth.signUpUser
);
router.post("/login", [validateEmail, validatePassword], auth.loginUser);
router.post("/favoritos", products.favProduct);

module.exports = router;

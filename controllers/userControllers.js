const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = require("../routes/userRoutes");
//const jwt = require( 'jsonwebtoken');

exports.signUpUser = (req, res, next) => {
  // Erro no terminal
  const errors = validationResult(req);
  console.log(errors);

  let { email, name, password } = req.body;

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .send({ error: true, message: errors.array()[0].msg });
  }
  //Validação simples se todos os campos foram prenchidos
  /*  if (!email || !name  || !password ) {
        return res.status(400).json({ error: true, msg: 'Envie os dados corretos' });
    } */

  /*    res.status(200).json({
        user: {
            email: email,
            name: name,
            passworld: password
        }
    })  */

  console.log(name, email, password);
  const user = new User();
  user
    .create({
      name,
      email,
      password,
    })
    .then((user) => {
      res.status(200).json({
        message: "Usuário cadastrado com secesso!",
        result: user,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Erro ao cadastrado o Usuário!",
        result: error,
      });
    });
  /* const user = new User({
    email: email,
    name: name,
    password: password,
  });
  user
    .create()
    .then((user) => {
      res.status(200).json({
        message: "Usuário cadastrado com secesso!",
        result: user,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Erro ao cadastrado o Usuário!",
        result: error,
      });
    }) */
};

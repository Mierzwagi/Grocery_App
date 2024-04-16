const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = require("../routes/userRoutes");
const { where } = require("sequelize");
//const jwt = require( 'jsonwebtoken');

exports.signUpUser = async (req, res, next) => {
  // Erro no terminal
  const errors = validationResult(req);
  console.log(errors);

  const { email, name, password } = req.body;

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .send({ error: true, message: errors.array()[0].msg });
  }

  const pass = await bcrypt.hash(password, 12)

  const userNew = new User(req.body)

  console.log(name, email, pass);

  /* const user = new User(req.body); */
  User.findOne({where : {email : email}})
    .then(user => {
      console.log(user)
      if (user) {
        return res.status(400).json({
          message: "Este useário já existe!"
        });
      }
      userNew.save().then((user) => {
        res.status(200).json({
          message: "Usuário cadastrado com secesso!",
          result: user,
        });
      })
      .catch((error) => {
    return    res.status(500).json({
          message: "Erro ao cadastrado o Usuário!",
          result: error,
        });
      });

    })

 
};

exports.loginUser = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ where: { email: email } })
    .then(async user => {
      console.log(user)
      if (!user) {
        res.status(422).json({
          message: "E-mail inválio!"
        })
      }

      console.log(user.dataValues.password);

      await bcrypt.compare(password, user.dataValues.password)
      .then(passHash => {
        if (!passHash) {
          res.status(401).json({
            message: "Senha inválida!"
          })
        }

       /*  const token = jwt.sign({
          email: user.email,
          userId: user._id.toString()
        }, 'KeyToken')
 */
        res.status(200).json({
          message: "Usuário logado com sucesso!",
          result: user

        })
      })
    })

};
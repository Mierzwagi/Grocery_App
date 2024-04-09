const { validationResult } = require( 'express-validator');
const bcrypt = require('bcrypt');
//const jwt = require( 'jsonwebtoken');

exports.signUpUser = (req, res, next) => {
    // Erro no terminal
    const errors = validationResult(req);
    console.log(errors)

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.passworld;

    if(!errors.isEmpty()){
        return res.status(422).send(
            { error: true, 
                message: errors.array()[0].msg 
            }
        );
    }
    //Validação simples se todos os campos foram prenchidos
    if (!email || !name  || !password ) {
        return res.status(400).json({ error: true, msg: 'Envie os dados corretos' });
    }

    res.status(200).json({
        user: {
            email: email,
            name: name,
            passworld: password
        }
    })

}
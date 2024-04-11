const Sequelize = require('sequelize')
const db = require('../db/connection')

const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    
})

//exportarpara ser utilizado
module.exports = User
const Sequelize = require('sequelize')
const db = require('../db/connection')

const Categorias = db.define('categorias', {
    nome: {
        type: Sequelize.STRING
    }
})

//exportarpara ser utilizado
module.exports = Categorias
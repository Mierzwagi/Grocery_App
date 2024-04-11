//Aplicaçã para utilizar bancos relacionais
const Sequelize = require('sequelize');

//Criando instancia do sequilize
const sequelize = new Sequelize({
    //Dialetq = qual banco utilizado e onde está
    dialect: 'sqlite',
    storage: './db/app.db'

});

//Exportar o arquivo de configuraçã do banco
module.exports = sequelize

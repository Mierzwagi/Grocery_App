const Sequelize = require("sequelize");
const db = require("../db/connection");
const { Products } = require("./products");

const Categorias = db.define("categorias", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  nome: {
    type: Sequelize.STRING,
  },
});

//Categorias.belongsTo(Products, {foreignKey: 'categoria', allowNull: false})

//exportar para ser utilizado
module.exports = Categorias;

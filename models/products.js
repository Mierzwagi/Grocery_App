const Sequelize = require("sequelize");
const db = require("../db/connection");

const Products = db.define("products", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  nome: {
    type: Sequelize.STRING,
  },
  quantidade: {
    type: Sequelize.INTEGER,
  },
  preco: {
    type: Sequelize.DOUBLE,
  },
  descricao: {
    type: Sequelize.STRING,
  },
  brand: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
});

//exportarpara ser utilizado
module.exports = Products;

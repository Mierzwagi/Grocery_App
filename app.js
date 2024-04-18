const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const authRoutes = require("./routes/userRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
//Banco de dados
const db = require("./db/connection.js");
const Products = require("./models/products.js");
const Categorias = require("./models/categorias.js");
const Favoritos = require("./models/favoritos.js");
const User = require("./models/user.js")

//bory parser
app.use(bodyParser.json());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productsRoutes);

// db connection = conexão cm o banco
db.authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao conectar com o banco de dados: ", error);
  });

//sinroniza os 'models' com o db
db.sync();
//db.sync({ alter: true }); // ({force: true})

//As relações e associações por padrão deixar no App
//Associação das Categorias com os Produdos
Products.belongsTo(Categorias);
Categorias.hasMany(Products);
//Associação dos Categorias com os Produdos
Favoritos.belongsTo(User);
Favoritos.belongsTo(Products);


app.listen(1111, () => {
  console.log("Servidor no ar");
});

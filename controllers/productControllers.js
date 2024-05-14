const { validationResult } = require("express-validator");
const Products = require("../models/products");
const Categorias = require("../models/categorias");
const Favoritos = require("../models/favoritos");
const User = require("../models/user");

exports.getProducts = async (req, res, next) => {
  const products = await Products.findAll();
  res.status(200).json({
    message: "Produtos encontrados com sucesso!",
    result: products,
  });
};

exports.creatProducts = (req, res, next) => {
  if (req.admin === false) {
    const error = new Error();
     return res.status(401).json({
      message: "Só admim!",
      result: error,
    });
  }
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .send({ error: true, message: errors.array()[0].msg });
  }

  const products = new Products(req.body);
  console.log(products);

  products
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Produto criado com sucesso!!",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Erro ao criar o produto!",
        result: error,
      });
    });
  console.log(products);
};

exports.createCategories = (req, res, next) => {
  console.log("req.admin:", req.admin);
  if (req.admin === false) {
    const error = new Error();
    return res.status(401).json({
      message: "Só admim!",
      result: error,
    });
  }

  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .send({ error: true, message: errors.array()[0].msg });
  }

  console.log(req.body);
  const categoria = new Categorias(req.body);
  console.log(categoria);

  categoria
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Categoria criado com sucesso!!",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Erro ao criar a categoria!",
        result: error,
      });
    });
  console.log(categoria);
  /* Categorias.findOne({where : {id : id}})
    .then(result => {
      console.log(result)
      if (result) {
        return res.status(400).json({
          message: "Este useário já existe!"
        });
      }
      categoria.save().then((result) => {
        res.status(200).json({
          message: "Categoria criado com sucesso!!",
          result: result,
        });
      }).catch((error) => {
        return  res.status(500).json({
              message: "Erro ao criar a categoria!",
              result: error,
            });
          });
    console.log(categoria)
    }) */
};

exports.getCategorias = async (req, res, next) => {
  const categoria = await Categorias.findAll();
  res.status(200).json({
    message: "Categorias encontradas com sucesso!",
    result: categoria,
  });
};

exports.favProduct = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .send({ error: true, message: errors.array()[0].msg });
  }

  const favoritos = new Favoritos(req.body);
  console.log(favoritos);

  favoritos
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Produto favoritado!!",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Erro ao favoritar o produto!",
        result: error,
      });
    });
  console.log(favoritos);
};

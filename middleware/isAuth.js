const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //Pegar o token sem a palavra Bearer
  console.log(req.get("Authorization"));
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Token de autorização não fornecido");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];

  //Verificando se o token é valido

  let authToken;

  try {
    authToken = jwt.verify(token, "KeyToken");
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }

  if (!authToken) {
    const error = new Error("Não Autorizado");
    error.statusCode = 401;
    throw error;
  }

  req.userId = authToken.userId;
  next();
};

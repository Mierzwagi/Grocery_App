const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const router = express.Router();
const authRoutes = require( './routes/userRoutes.js' );
//Banco de dados
const db = require('./db/connection.js')


app.use(bodyParser.json())
app.use(express.json())

app.use('/auth', authRoutes)

// db connection = conexão cm o banco
db.authenticate()
.then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!')
})
.catch( error =>{
    console.log('Erro ao conectar com o banco de dados: ', error)
})


app.listen(1111, () =>{
    console.log('Servidor no ar')
})
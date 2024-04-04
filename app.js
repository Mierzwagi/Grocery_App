const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const router = express.Router();
const authRoutes = require( './routes/authRoutes.js' );


app.use(bodyParser.json())
app.use(express.json())

app.use('/auth', authRoutes)


app.listen(1111, () =>{
    console.log('Servidor no ar')
})
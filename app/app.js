const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express(); // levanto la app (genero un objeto app)

// Cargo los módulos particulares de la app

const Burger = require('./routes/burger');
const Fries = require('./routes/fries');
const Menu = require('./routes/menu');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// la llamada a la url base localhost:5005
/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/text.html'));
})
*/

app.get('/',(req,res)=>{
    console.log("Hola mundo, bienvenido a mi app.")
    res.status(200).send({message: 'Bienvenido a mi app.'});
})



/* endpoints */


app.use('/burgers', Burger);
app.use('/fries', Fries);
app.use('/menus', Menu);


module.exports = app
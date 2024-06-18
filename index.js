// import modulu express
const express = require('express');
const app = express();

console.log("stránka je aktivní");

app.use(express.static('public')); //  aktivoání složky s css, img a javascriptem

app.set('view engine', 'ejs'); //  import modulu ejs

app.get('/', (req, res) => { //  nastavení a aktivování hlavní stránky
    res.render('index.ejs');
})

app.listen(5000); //  naslouchá na portu 5000
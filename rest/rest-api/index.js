'use strict';


// ele busca a pasta express dentro de node_modules e incorpora o index.js desta pasta
var express = require('express');
var cors = require('cors');
// executa o arquivo atribuindo ele a uma variavel
var app = express();

var pessoas = {

    leo: {
        nome: 'leonardo',
        idade: 22
    },
    feh: {
        nome:'fernando',
        idade: 20
    },
    kley: {
        nome: 'kleyton',
        idade: 24
    }

}


//permite o acesso a aplicação
app.use(cors());

// get é o metodo que ira receber quando o metodo passado for GET
app.get('/', function (request, response) {
    response.send('<h1>Bem vindo minha primeira api</h1>')
});

// app.get( '/pessoa' , function (req, res) {
//     res.send('{ name: leonardo, age: 22  }')
// });

app.get( '/pessoa/:username' , function (req, res) {
    // retorna a variavel username
    // res.send('você esta pesquisando sobre: ' + req.params.username)

    // retorna a uri completa
    // res.send('req.params = ' + req.url)

    var username = req.params.username;

    if (pessoas[username]) {
        res.json(pessoas[username]);
    }
    else{
        res.json({Error: 'Pessoa não encontrada'});
    }

});


// define a porta para acessar pelo servidor
app.listen(8000);

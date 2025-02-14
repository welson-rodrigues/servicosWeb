var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
const sequelize = require('./database');
const Aluno = require('./api/models/alunoModel')

sequelize.sync()
    .then(() => {
        console.log('BD acessado');
    })
    .catch(err => {
        console.log('Falha ao conectar com o DB', err);
    });

app.listen(port);

app.get('/', function (req, res) { res.json({ hello: 'Olá Pessoa Estranha' }); })
console.log('Escutando na porta: ' + port);
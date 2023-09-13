var express = require("express");
var app = express();

const path = require('path');

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname + "/home/home.html"));
});

app.get("/todo", function (req, res) {
    res.sendFile(path.join(__dirname + "/ToDo/todo.html"));
});

app.get("/jogodavelha", function (req, res) {
    res.sendFile(path.join(__dirname + "/jogodaveia/jogoDaVelhaGPT.html"));
});

//-----------------------------
const rootDir = __dirname + '/blocodenotas';

app.get('/bloco', function (req, res) {
    res.sendFile(path.join(rootDir, 'bloco.html'));
});

app.get('/scripts.js', function (req, res) {
    res.sendFile(path.join(rootDir, 'scripts.js'));
});

app.get('/styles.css', function (req, res) {
    res.sendFile(path.join(rootDir, 'styles.css'));
});
//----------------------------

app.listen(3001, function () {
    console.log("App de Exemplo escutando na porta 3002!");
});
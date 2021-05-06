const db = require('../database/models/index.js')

const indexController = {
    home:
        function (req, res) {
            res.render('index');
        },

    login:
        function (req, res) {
            res.render('login');
        },

    register: 
        function (req, res) {
            res.render('register');
        },
    createProyect: 
        function (req, res) {
            res.render('createProyect');
        },
}

module.exports = indexController;
const db = require('../database/models/index.js')

const userController = {
    login:
    function (req, res) {
        res.render('login');
    },

register:
    function (req, res) {
        res.render('register');
    },
}

module.exports = userController;
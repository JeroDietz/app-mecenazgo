const db = require('../database/models/index.js')

const indexController = {
    
    home:
        function (req, res) {
            db.Project.findAll()
                .then(function (projects) {
                    return res.render('index', { projects });
                })

        },
    
    detail:
        function(req,res){
            db.Project.findByPk(req.params.id)
                .then(function(projects){
                    return res.render('detailProyect', {projects})
                })
        },
    createProyect:
        function (req, res) {
            res.render('createProyect');
        },

    create:
        function (req, res) {
            db.Project.create({
                title: req.body.titulo,
                sub_title: req.body.subTitulo,
                description: req.body.descripcion,
                user_id: 1,
            }).then(function(resultado){
                res.redirect('/')
            })
        },
    updateProject: 
        function(req,res){
            db.Project.findAll()
            .then(function(projects){
                return res.render('editarProyect', {projects})
            })
            
        },


    login:
        function (req, res) {
            res.render('login');
        },

    register:
        function (req, res) {
            res.render('register');
        },
}

module.exports = indexController;
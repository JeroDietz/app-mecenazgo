const db = require('../database/models/index.js')
const { Op } = require("sequelize");

const projectController = {

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
            db.Project.findByPk(req.params.id)
            .then(function(projects){
                return res.render('editarProyect', {projects})
            })
            
        },
    update: 
        function(req,res){db.Project.update(
            {
            title: req.body.titulo,
            sub_title: req.body.subTitulo,
            description: req.body.descripcion},
            {where:{
                id: req.params.id}
            }).then(function(){
                res.redirect('/')
            })
           
        },
    delete: function(req,res){
        db.Project.destroy(
            {where:{id : req.params.id}}
        ).then(function(){
            return res.redirect('/');
        })
        },
    search: function (req, res) {
            db.Project.findAll(
                {where: {
                    title: {[Op.like]:"%"+ req.query.search +"%"}    
                    },
                }).then(function (projects) {
                    
                    return res.render("allProyect", { projects })
                }).catch(function(e){
                    console.log(e)
                })
        },
}

module.exports = projectController
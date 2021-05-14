const db = require('../database/models/index.js');
const bcrypt = require('bcryptjs');


const userController = {
    login:
        function (req, res) {
            res.render('login');
        },

    register:
        function (req, res) {
            res.render('register');
        },
    createUser:
        function(req,res){
            db.User.create({
                name: req.body.email,
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                password: bcrypt.hashSync(toString(req.body.contraseña), 12),
                identification_number: 1,
                avatar: req.body.nombre,
                amount: 500,
                type: req.body.tipo,

            }).then(function(users){
                return res.redirect('/')
            })
        },
    perfil:
        function(req,res){
            res.render('perfil')
        },
    chequeoUser: 
        function(req,res){
            db.User.findOne({
                    where:{
                        'name': req.body.name,
                        //'password' : req.body.contraseña
                    }
            }
            ).then(function(users){         
                if(users.name == req.body.name && bcrypt.compare(toString(req.body.contraseña), users.password)){
                   req.session.userSession = {
                        id: users.id,
                        name: users.name,
                        first_name: users.first_name,
                        last_name: users.last_name,
                        identification_number: users.identification_number,
                        type: users.type,
                    }
                    console.log('SESSION CREADAAA')
                    console.log(req.session.userSession);       
                    return res.redirect('/');
                }

                return res.render('login');
            })

           /* db.User.findAll()
            .then(function(users){
                console.log(users);
                for(let i = 0; i < users.length; i++){
                    if(users[i].name == req.body.name){
                        return res.redirect('/')
                    }
                    
                };
                return res.send('Usuario NO encontrado');

            })*/
        },

    logOut:
        function(req,res){
            req.session.userSession = undefined;
            res.redirect('/');
        }

}

module.exports = userController;
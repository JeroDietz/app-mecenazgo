const db = require('../database/models/index.js');
const bcrypt = require('bcrypt');

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
                password: bcrypt.hashSync(req.body.contraseña, 12),
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
            
//

            db.User.findOne({
                "name": req.body.name}
            ).then(function(users){
                const deLaVista = toString(req.body.contraseña);
                console.log(deLaVista)
                if(users.name == req.body.name && bcrypt.compareSync(deLaVista, users.password)){
                    console.log('esta funcando')
                    return res.redirect('/')
                }else{
                    res.render('login')
                }

                    
            })


           /* db.User.findAll()
            .then(function(users){
                for(let i = 0; i < users.length; i++){
                    if(users[i].name == req.body.name){
                        return res.redirect('/')
                    }
                    
                };
                return res.send('Usuario NO encontrado');

            })*/
        },

}

module.exports = userController;
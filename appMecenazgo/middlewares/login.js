const db = require("../database/models")

module.exports = function(req, res, next) {
    if(typeof req.session.userSession != 'undefined') {
        res.locals.userSession = req.session.userSession
    }
    /* else if (typeof req.cookies.recordarme != 'undefined') {
            db.User.findByPk(req.cookies.recordarme)
            .then(function(resultado){
                res.locals.users = resultado;
                req.session.users = resultado;
            }).catch(function(e){
               res.render("error")
            })
        }*/
    

    next()
}
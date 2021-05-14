module.exports = function(req,res, next){
    if(req.unDatoDelUsuario == true){
        res.locals.estaLogeado = true;
    }
    next();
}
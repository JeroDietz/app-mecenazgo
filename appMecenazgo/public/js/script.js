window.onload= function(){
    let enviarForm = document.getElementById('botonDelete')
    console.log(enviarForm);

    enviarForm.addEventListener('click', function(){
        confirm('Estas seguro de querer eliminar este proyecto?')
    })
}
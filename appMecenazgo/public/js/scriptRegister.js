
let register = document.querySelector("form.register");
register.addEventListener("submit", function (e) {
    let errors = [];

    let inputName = document.getElementById("validationServer01");
    let inputLastName = document.getElementById("validationServer02");
    let inputEmail = document.getElementById("validationServer03");
    let inputPassword = document.getElementById("validationServer04");



    if (inputName.value == "") {
        errors.push("El campo Nombre se encuentra vacío");
    } else if (inputName.value.length < 2) {
        errors.push("El campo Nombre debe tener al menos 2 caracteres");
    }

    if (inputLastName.value == "") {
        errors.push("El campo Apellido se encuentra vacío");
    } else if (inputLastName.value.length < 2) {
        errors.push("El campo Apellido debe tener al menos 2 caracteres");
    }

    if (inputEmail.value == "") {
        errors.push("El campo Email se encuentra vacío");
    }


    if (inputPassword.value == "") {
        errors.push("El campo Contraseña se encuentra vacío");
    } else if (inputName.value.length > 8) {
        errors.push("La Contraseña debe tener al menos 8 caracteres");
    }

    function validar_email(email) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email)
    }

    if (!validar_email(inputEmail.value)) {
        errors.push("El campo de email no es válido");
    }


    if (errors.length > 0) {
        e.preventDefault();
    }

    let small = document.querySelector("div.errors");
    for (let i = 0; i < errors.length; i++) {
        small.innerHTML += "<li style='text-align: center; color: red; list-style-type: none';>" + errors[i] + "</li>"
    }


})
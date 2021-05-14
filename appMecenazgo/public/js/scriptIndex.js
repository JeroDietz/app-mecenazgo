let botonAportar = document.getElementById('botonAportar');

botonAportar.onclick = function(){
    let progess = document.querySelector('div.progress-bar').innerHTML = '100%';
    let bar = document.querySelector('.progress-bar');
    bar.style.width = '100%'
}
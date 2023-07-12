document.addEventListener('DOMContentLoaded', function(){
    validacion();
});

const principal = document.querySelector('.principal');
const secundaria =document.querySelector('.secundaria');
const formulario = document.querySelector('.formulario');
const span = document.querySelector('.span-email');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
const input = document.querySelector('.input-email');
const label = document.querySelector('.contenedor-label');
const error = document.createElement('P');
const volver = document.querySelector('.boton-volver');

error.classList.add('error');
error.textContent = 'Enter a valid email';
error.style.display = "none";
label.appendChild(error);


function validacion() {
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (emailRegex.test(email)) {
            emailCorrecto(email);
        } else {
            emailIncorrecto();
        }
    });


    volver.addEventListener("click", function() { 
        principal.classList.remove('hidden');
        secundaria.classList.remove('mostrar');
    });
}

function emailCorrecto(email) {
    // dar clases mostrar y ocultar
    principal.classList.add('hidden');
    secundaria.classList.add('mostrar');

    // agregar email a texto
    span.textContent = email;
   
}

function emailIncorrecto() {
    if(error.style.display === 'none') {
        error.style.display = 'block';
    }
    input.classList.add('error-input');
}



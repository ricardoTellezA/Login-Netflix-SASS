//VALIDAR FORMULARIO
const inputs = document.querySelectorAll('form .campo input');


//LISTENERS

inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});

inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});


function validarInput(e) {
    const estado = ['valido', 'no-valido'];

    let clase;

    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }
    e.target.classList.remove(...estado); 
    e.target.nextElementSibling.classList.remove(...estado);
     
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    if (clase === 'no-valido') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            //mensaje error
            const errorDiv = document.createElement('div');

            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            //insertar error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);

        }
    } else {
        //limpiar mendaje error
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }

    }
}


//mostrar y ocultar pass

const mostrarPass = document.querySelector('form .campo span');
mostrarPass.addEventListener('click', e => {

    const passInput = document.querySelector('#password');

    if(e.target.classList.contains('mostrar')){
        //mostrar texto
        e.target.classList.remove('mostrar');

        e.target.textContent = 'Ocultar';

        //cambiar a password
        passInput.type = 'text';
        


    }else{
        //mostrar pass
        e.target.classList.add('mostrar');

        //cambiar el texto

        e.target.textContent = 'Mostrar';

        //cambiar a password
        passInput.type = 'password';
    }

});
const formulario = document.querySelector('.formulario'),
      formulario2 = document.querySelector('.formulario2'),
      inputs = document.querySelectorAll('.formulario input'),
      sign_in_container = document.querySelector('.sign-in-container'),
      sign_up_container = document.querySelector('.sign-up-container'),
      registros = [];

let intentos = 0; // Variable para llevar el conteo de intentos
let bloqueado = false;

document.addEventListener('click', e => {
    if (e.target.matches('.ok-account')) {
        sign_in_container.style.display = 'block';
        sign_up_container.style.display = "none";
        document.querySelector('.error_notify').classList.remove('active');
    } else if (e.target.matches('.no-account')){
        sign_up_container.style.display = "block";
        sign_in_container.style.display = "none";
        document.querySelector('.error_notify').classList.remove('active');
    }
})

const expresiones_regulares = {
    cedula: /^\d{2}-\d{4}-\d{4}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
    celular: /^\d{4}-\d{4}$/,
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    cedula:false,
    nombre:false,
    apellido:false,
    celular:false,
    password:false,
    confirmpassword:false,
    email:false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "cedula":
            validarCampo(expresiones_regulares.cedula,e.target.value,'cedula');
            console.log(expresiones_regulares.cedula.test(e.target.value))
            break;
        case "nombre":
            validarCampo(expresiones_regulares.nombre,e.target.value,'nombre');
            console.log(expresiones_regulares.nombre.test(e.target.value))
            break;
        case "apellido":
            validarCampo(expresiones_regulares.apellido,e.target.value,'apellido');
            console.log(expresiones_regulares.apellido.test(e.target.value))
            break;
        case "celular":
            validarCampo(expresiones_regulares.celular,e.target.value,'celular');
            console.log(expresiones_regulares.celular.test(e.target.value))
            break;
        case "email":
            validarCampo(expresiones_regulares.email, e.target.value, 'email')
            console.log(expresiones_regulares.email.test(e.target.value))
            break;
        case "password":
            validarCampo(expresiones_regulares.password,e.target.value, 'password')
            console.log(expresiones_regulares.password.test(e.target.value))
            break;
        case "confirmpassword":
            validarCampo(expresiones_regulares.password,e.target.value, 'confirmpassword')
            console.log(expresiones_regulares.password.test(e.target.value))
            break;
        default:
            break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if (expresion.test(input)) {
        document.getElementById(campo).classList.remove('error');
        campos[campo] = true;
    } else {
        document.getElementById(campo).classList.add('error');
        campos[campo] = false;
    }
}

const validarConfirmacionPassword = (confirmPassword) => {
    const password = document.getElementById('password').value;
    if (confirmPassword === password) {
        document.getElementById('confirmPassword').classList.remove('error');
        campos['confirmpassword'] = true;
        console.log('Contraseña igual')
    } else {
        document.getElementById('confirmPassword').classList.add('error');
        campos['confirmpassword'] = false;
        console.log('Contraseña no es igual')
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', e => {
    e.preventDefault();
    console.log("entro");
    if (campos.nombre && campos.apellido && campos.celular && campos.password && campos.email && campos.confirmpassword && !cedulaRepetida()) {
        // Guardar los datos del usuario en la lista de registros

        console.log("Evento de envío del formulario activado");
        console.log(registros);
 
        registros.push({
            cedula: document.getElementById('cedula').value,    
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            celular: document.getElementById('celular').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        });

        console.log(registros);

        // Guarda la lista actualizada en el almacenamiento local
       localStorage.setItem('registros', JSON.stringify(registros));


        document.querySelector('.check_notify').classList.add('active');
        document.querySelector('.error_notify').classList.remove('active');

        setTimeout(() => {
            document.querySelector('.check_notify').classList.remove('active');
        }, 5000);
    } else {
        document.querySelector('.error_notify').classList.add('active');
        document.querySelector('.check_notify').classList.remove('active');
    }
})

formulario2.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    if (bloqueado) {
        alert('Has excedido el número de intentos permitidos. Por favor, espera 15 segundos antes de intentarlo de nuevo.');
        return;
    }

    // Obtener los valores de cédula y contraseña ingresados por el usuario
    const cedulaInput = document.getElementById('cedula2').value;
    const passwordInput = document.getElementById('password2').value;

    // Buscar en la lista de registros el usuario con la cédula ingresada
    const usuario = registros.find(registro => registro.cedula === cedulaInput);

    if (usuario) {
        // Si se encuentra el usuario, verificar la contraseña
        if (usuario.password === passwordInput) {
            alert('Inicio de sesión exitoso');
            window.location.href = 'index.html';
        } else {
            intentos++; // Incrementar el contador de intentos
            if (intentos >= 3) {
                bloquearUsuario(); // Bloquear al usuario después de 3 intentos fallidos
            }
            alert('La contraseña es incorrecta');
        }
    } else {
        alert('No se encontró ningún usuario con la cédula proporcionada');
    }
});

// Función para verificar si una cédula ya está registrada
const cedulaRepetida = () => {
    const cedulaInput = document.getElementById('cedula').value;
    for (let i = 0; i < registros.length; i++) {
        if (registros[i].cedula === cedulaInput) {
            return true; // La cédula está repetida
        }
    }
    return false; // La cédula no está repetida
}

// Función para bloquear al usuario y establecer un temporizador
const bloquearUsuario = () => {
    bloqueado = true;
    setTimeout(() => {
        bloqueado = false;
        intentos = 0; // Reiniciar el contador de intentos
    }, 15000); // Establecer un tiempo de espera de 15 segundos en milisegundos
};

localStorage.setItem('registros', JSON.stringify(registros));
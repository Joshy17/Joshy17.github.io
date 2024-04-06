let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

// Recupera la lista de personas del almacenamiento local
const registros = JSON.parse(localStorage.getItem('registros')) || [];

console.log(registros);

const modificarButton = document.getElementById('Modificar');
const eliminarButton = document.getElementById('Eliminar');
const historialButton = document.getElementById('Historial');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', () => lastMonth());
nextMonthDOM.addEventListener('click', () => nextMonth());

modificarButton.addEventListener('click', modificarCita);
eliminarButton.addEventListener('click', eliminarCita);
historialButton.addEventListener('click', historialCita);


const btn = document.getElementById('Confirmar');

btn.addEventListener('click', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const recipientEmail = 'alonsoarbol48@gmail.com';

  const serviceID = 'default_service';
  const templateID = 'template_3csumn8';

  emailjs.sendForm(serviceID, templateID, this.form, {
    recipient_email: recipientEmail // 'recipient_email' es el nombre del parámetro que espera tu plantilla de EmailJS
  }).then(() => {
    // Manejar el éxito del envío del correo
    alert('¡Correo enviado!');
  }, (err) => {
    // Manejar cualquier error durante el envío del correo
    alert('Error al enviar el correo: ' + JSON.stringify(err));
  });
});

function historialCita(cita) {
    const historialCitas = JSON.parse(localStorage.getItem('historialCitas')) || [];
    // Crear un elemento para mostrar el historial de citas
    historialCitas.push(cita);
    localStorage.setItem('historialCitas', JSON.stringify(historialCitas));
    const historialElement = document.createElement('div');
    historialElement.classList.add('historial-citas');
    // Agregar cada cita al elemento del historial
    
    historialCitas.forEach(cita => {
        const citaElement = document.createElement('p');
        citaElement.textContent = `Nombre: ${cita.nombreUsuario}, Cédula: ${cita.cedulaUsuario}, ${cita.doctor},${cita.fecha}`;
        historialElement.appendChild(citaElement);
    });
    // Mostrar el elemento del historial en una ventana emergente
    const popup = window.open('', 'Historial de Citas', 'width=600,height=400');
    popup.document.body.appendChild(historialElement);
}

function modificarCita() {
    // Obtener el día seleccionado para modificar la cita
    const day = parseInt(document.querySelector('.calendar__date.selected').textContent);
    
    // Obtener las citas agendadas para el día seleccionado
    const citas = JSON.parse(document.querySelector('.calendar__date.selected').dataset.cita);
    console.log(citas);

    // Obtener los valores de los campos del formulario de modificación
    const nuevaFecha = new Date(document.getElementById('dateTime').value);
    const nuevoDoctor = document.getElementById('doctor').value;

    // Validar que se haya seleccionado una nueva fecha y hora
    if (!nuevaFecha || !nuevoDoctor) {
        alert('Por favor, seleccione una nueva fecha y doctor para modificar la cita.');
        return;
    }

    const primerRegistro = registros[0];

    // Obtener los detalles del primer usuario
    const nombre = primerRegistro.nombre;
    const cedula = primerRegistro.cedula;

    // Crear un objeto con los datos de la cita modificada
    const citaModificada = {
        nombreUsuario: nombre,
        cedulaUsuario: cedula,
        doctor: nuevoDoctor,
        fecha: nuevaFecha
    };

    console.log(citaModificada);
    // Actualizar la cita en el calendario
    const calendarDays = document.getElementsByClassName('calendar__date');
    for (let i = 0; i < calendarDays.length; i++) {
        if (parseInt(calendarDays[i].textContent) === day) {
            // Guardar los datos de la cita modificada en el atributo data de la casilla del calendario
            calendarDays[i].dataset.cita = JSON.stringify([citaModificada]);
            break;
        }
    }
}

// Escuchar el evento click del botón "Modificar Cita"
document.getElementById('Modificar').addEventListener('click', function(event) {
    event.preventDefault();
    modificarCita();
});

function eliminarCita() {
    document.querySelectorAll('.calendar__date').forEach(dayElement => {
        dayElement.addEventListener('click', () => {
            console.log('Se hizo clic en el día:', dayElement.textContent);
            // Verificar si la casilla tiene la clase 'selected' que indica que hay una cita agendada
            if (dayElement.classList.contains('selected')) {
                // Obtener la cita almacenada en el atributo data de la casilla del calendario
                const cita = JSON.parse(dayElement.dataset.cita);
                // Crear un elemento para mostrar los datos de la cita en la casilla del calendario
                const citaElement = document.createElement('div');
                citaElement.textContent = `${dayElement.textContent}`;
                citaElement.classList.add('appointment-info');
                citaElement.title = `Nombre: ${cita.nombreUsuario}, Cédula: ${cita.cedulaUsuario}, ${cita.doctor},${cita.fecha} `;
                
                // Cambiar el color de fondo a rojo
                citaElement.style.backgroundColor = 'red';
    
                // Eliminar cualquier elemento de cita existente en la casilla del calendario
                dayElement.innerHTML = '';
                // Agregar el elemento de cita a la casilla del calendario
                dayElement.appendChild(citaElement);
            }
        });
    });
}


const writeMonth = (month) => {
    for (let i = startDay(); i > 0; i--) {
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber - 1) - (i - 1)}
        </div>`;
    }

    for (let i = 1; i <= getTotalDays(month); i++) {
        if (i === currentDay) {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}
            </div>`;
            
        } else {
            dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
        }
    }


    // Escuchar el evento click en cada casilla del calendario
    document.querySelectorAll('.calendar__date').forEach(dayElement => {
        dayElement.addEventListener('click', () => {
            console.log('Se hizo clic en el día:', dayElement.textContent);
            // Verificar si la casilla tiene la clase 'selected' que indica que hay una cita agendada
            if (dayElement.classList.contains('selected')) {
                // Obtener la cita almacenada en el atributo data de la casilla del calendario
                const cita = JSON.parse(dayElement.dataset.cita);
                // Crear un elemento para mostrar los datos de la cita en la casilla del calendario
                const citaElement = document.createElement('div');
                citaElement.textContent = `${dayElement.textContent}`;
                citaElement.classList.add('appointment-info');
                citaElement.title = `Nombre: ${cita.nombreUsuario}, Cédula: ${cita.cedulaUsuario}, ${cita.doctor},${cita.fecha} `;

                // Eliminar cualquier elemento de cita existente en la casilla del calendario
                dayElement.innerHTML = '';
                // Agregar el elemento de cita a la casilla del calendario
                dayElement.appendChild(citaElement);
            }
        });
    });
}

const getTotalDays = month => {
    if (month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;
    } else {
        return isLeap() ? 29 : 28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay() - 1) === -1) ? 6 : start.getDay() - 1;
}

const lastMonth = () => {
    if (monthNumber !== 0) {
        monthNumber--;
    } else {
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if (monthNumber !== 11) {
        monthNumber++;
    } else {
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

// Función para agregar la cita al calendario
function agregarCitaAlCalendario(cita) {
    const day = cita.fecha.getDate();
    const calendarDays = document.getElementsByClassName('calendar__date');
    for (let i = 0; i < calendarDays.length; i++) {
        if (parseInt(calendarDays[i].textContent) === day) {
            // Agregar la cita al día correspondiente en el calendario
            calendarDays[i].classList.add('selected');
            // Guardar los datos de la cita en el atributo data de la casilla del calendario
            calendarDays[i].dataset.cita = JSON.stringify(cita);
            break;
        }
    }
}

// Escuchar el evento submit del formulario de citas
document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const dateTime = document.getElementById('dateTime').value;
    const doctor = document.getElementById('doctor').value;
    const appointmentDate = new Date(dateTime);
    const primerRegistro = registros[0];

    // Obtener los detalles del primer usuario
    const nombre = primerRegistro.nombre;
    const cedula = primerRegistro.cedula;

    // Crear un objeto con la información de la cita y del usuario
    const cita = {
        nombreUsuario: nombre,
        cedulaUsuario: cedula,
        doctor: doctor,
        fecha: appointmentDate
    };

    // Agregar la cita al calendario
    agregarCitaAlCalendario(cita);

    historialCita(cita);
});

// Llama a la función
writeMonth(monthNumber);



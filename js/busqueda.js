const doctors = [
    {
        doctorName: "Roberto Lopez",
        doctorSpeciality: "Cardiologo",
        doctorLocation: "Cartago",
        doctorId: "03-0501-0201",
        img: "img/doctor1.jpg",
        horario: "08:00am - 14:00pm",
        telefono: "7815-1414",
        correo: "roberto@gmail.com",
        resenias: "☆☆☆☆☆",

    },
    {
        doctorName: "Francisco Trejos",
        doctorSpeciality: "Cardiologo",
        doctorLocation: "San Jose",
        doctorId: "03-0511-1201",
        img: "img/doctor2.jpg",
        horario: "09:00am - 20:00pm",
        telefono: "70000-1414",
        correo: "francisco@gmail.com",
        resenias: "☆☆☆☆",

    },
    {
        doctorName: "Fabiana Campos",
        doctorSpeciality: "Cardiologo",
        doctorLocation: "Heredia",
        doctorId: "03-0501-1111",
        img: "img/doctor3.jpg",
        horario: "08:00am - 16:00pm",
        telefono: "7815-0000",
        correo: "fabiana@gmail.com",
        resenias: "☆☆☆☆☆",

    },
    {
        doctorName: "Melody Ford",
        doctorSpeciality: "Dermatologa",
        doctorLocation: "Cartago",
        doctorId: "03-0202-0201",
        img: "img/doctor4.jpg",
        horario: "10:00am - 18:00pm",
        telefono: "8452-1414",
        correo: "melody@gmail.com",
        resenias: "☆☆☆☆",

    },
    {
        doctorName: "Joshua Murillo",
        doctorSpeciality: "Dermatologo",
        doctorLocation: "San Jose",
        doctorId: "03-0605-0201",
        img: "img/doctor5.jpg",
        horario: "08:00am - 16:00pm",
        telefono: "7815-1414",
        correo: "roberto@gmail.com",
        resenias: "☆☆☆☆☆",

    },
    {
        doctorName: "Pedro Chichilla",
        doctorSpeciality: "Dermatologo",
        doctorLocation: "Limon",
        doctorId: "03-0603-0101",
        img: "img/doctor6.jpg",
        horario: "07:00am - 13:00pm",
        telefono: "9654-1111",
        correo: "pedro@gmail.com",
        resenias: "☆☆☆☆",

    },
    {
        doctorName: "Montse González",
        doctorSpeciality: "Ginecologa",
        doctorLocation: "Cartago",
        doctorId: "03-1545-0701",
        img: "img/doctor7.jpg",
        horario: "11:00am - 20:00pm",
        telefono: "6452-4747",
        correo: "montse@gmail.com",
        resenias: "☆☆☆☆☆",

    },
    {
        doctorName: "Jeremy Ortiz",
        doctorSpeciality: "Ginecologo",
        doctorLocation: "Alajuela",
        doctorId: "03-0908-0502",
        img: "img/doctor8.jpg",
        horario: "11:00am - 20:00pm",
        telefono: "6584-7744",
        correo: "jeremy@gmail.com",
        resenias: "☆☆☆☆",

    },
    {
        doctorName: "Claudia Campadaball",
        doctorSpeciality: "Ginecologa",
        doctorLocation: "San Jose",
        doctorId: "03-0306-0909",
        img: "img/doctor9.jpg",
        horario: "08:00am - 16:00pm",
        telefono: "7815-2222",
        correo: "claudia@gmail.com",
        resenias: "☆☆☆☆",

    },
    {
        doctorName: "Warren Betancourt",
        doctorSpeciality: "Oftalmologo",
        doctorLocation: "Cartago",
        doctorId: "03-0606-0405",
        img: "img/doctor10.jpg",
        horario: "08:00am - 13:00pm",
        telefono: "7005-0000",
        correo: "warren@gmail.com",
        resenias: "☆☆☆☆☆",

    },
    {
        doctorName: "Cesar Valle",
        doctorSpeciality: "Oftalmologo",
        doctorLocation: "San Jose",
        doctorId: "03-0501-6666",
        img: "img/doctor11.jpg",
        horario: "07:00am - 14:00pm",
        telefono: "7542-1111",
        correo: "cesar@gmail.com",
        resenias: "☆☆☆☆☆",

    },
    {
        doctorName: "Mariana Vega",
        doctorSpeciality: "Oftalmologa",
        doctorLocation: "Guanacaste",
        doctorId: "03-6050-0404",
        img: "img/doctor12.jpg",
        horario: "08:00am - 20:00pm",
        telefono: "7815-6363",
        correo: "mariana@gmail.com",
        resenias: "☆☆☆☆",

    },
    {
        doctorName: "Dylan Nuñez",
        doctorSpeciality: "Pediatra",
        doctorLocation: "Cartago",
        doctorId: "03-0505-0101",
        img: "img/doctor13.jpg",
        horario: "08:00am - 15:00pm",
        telefono: "8545-1414",
        correo: "dylan@gmail.com",
        resenias: "☆☆☆☆",

    },
    {
        doctorName: "Scott Figueroa",
        doctorSpeciality: "Pediatra",
        doctorLocation: "San Jose",
        doctorId: "03-6969-1515",
        img: "img/doctor14.jpg",
        horario: "08:00am - 13:30pm",
        telefono: "8451-7474",
        correo: "scott@gmail.com",
        resenias: "☆☆☆☆",

    },
    {
        doctorName: "Habullah Chan",
        doctorSpeciality: "Pediatra",
        doctorLocation: "Puntarenas",
        doctorId: "03-3636-7878",
        img: "img/doctor15.jpg",
        horario: "08:00am - 16:00pm",
        telefono: "6245-1414",
        correo: "habullah@gmail.com",
        resenias: "☆☆☆☆☆",

    },
    {
        doctorName: "Jesús Fuentes",
        doctorSpeciality: "Urologo",
        doctorLocation: "Cartago",
        doctorId: "03-6565-6565",
        img: "img/doctor16.jpg",
        horario: "08:00am - 17:00pm",
        telefono: "6451-1414",
        correo: "jesus@gmail.com",
        resenias: "☆☆☆☆☆",

    },
    {
        doctorName: "Fiorella Martinez",
        doctorSpeciality: "Urologo",
        doctorLocation: "San Jose",
        doctorId: "03-5451-7777",
        img: "img/doctor17.jpg",
        horario: "08:00am - 17:00pm",
        telefono: "8484-1414",
        correo: "fiorella@gmail.com",
        resenias: "☆☆☆☆☆",

    },
    {
        doctorName: "Kendall Chavarría",
        doctorSpeciality: "Urologo",
        doctorLocation: "Guanacaste",
        doctorId: "03-6969-4444",
        img: "img/doctor18.jpg",
        horario: "08:00am - 19:00pm",
        telefono: "8454-1414",
        correo: "kendall@gmail.com",
        resenias: "☆☆☆☆☆",

    },
];

const doctorContent =document.getElementById('doctorContent');
const searchName =document.getElementById('searchName');
const searchSpeciality =document.getElementById('searchSpeciality');
const searchLocation =document.getElementById('searchLocation');
const searchId =document.getElementById('searchId');
const noResults = document.getElementById('noResults');

const showDoctorBio = (bio) => {
    alert(bio); // Muestra la biografía en una ventana emergente (puedes modificar esto según tus necesidades)
};

const displayDoctors = (doctorsList) => {

    doctorContent.innerHTML = "";

    if(doctorsList.length === 0){
        noResults.style.display = "block";
    }else{

        doctorsList.forEach((doctors) =>{

            const content = document.createElement("div");
            content.className = "card-doctors";
            content.innerHTML= `
            <img src= "${doctors.img}">
            <h3>${doctors.doctorName}</h3>
            <p class="doctorSpeciality">${doctors.doctorSpeciality}</p>
            <p class="doctorLocation">${doctors.doctorLocation}</p>
            <p class="doctorId">${doctors.doctorId}</p>
            <button >Mas Información</button>
            `;

            const moreInfoBtn = content.querySelector('button'); // Encuentra el primer botón dentro del contenido
             moreInfoBtn.addEventListener("click", () => {
                const doctorInfo = `Horario: ${doctors.horario}, Teléfono: ${doctors.telefono}, Correo: ${doctors.correo}, Calificación: ${doctors.resenias}`;
                alert(doctorInfo);
             });

            doctorContent.append(content);
        });
        noResults.style.display = "none";
    }

};

const handleSearch = () => {

    const nameTerm = searchName.value.toLowerCase();
    const specialityTerm = searchSpeciality.value.toLowerCase();
    const locationTerm = searchLocation.value.toLowerCase();
    const idTerm = searchId.value.toLowerCase();

    const filteredDoctors = doctors.filter((doctor) => {
        const nameMatches = nameTerm ? doctor.doctorName.toLowerCase().startsWith(nameTerm) : true;
        const specialityMatches = specialityTerm ? doctor.doctorSpeciality.toLowerCase().startsWith(specialityTerm) : true;
        const locationMatches = locationTerm ? doctor.doctorLocation.toLowerCase().startsWith(locationTerm) : true;
        const idMatches = idTerm ? doctor.doctorId.toLowerCase().startsWith(idTerm) : true;

        return nameMatches && specialityMatches && locationMatches && idMatches;
    });

    displayDoctors(filteredDoctors);
}

displayDoctors(doctors);

searchName.addEventListener("input", handleSearch);
searchSpeciality.addEventListener("input", handleSearch);
searchLocation.addEventListener("input", handleSearch);
searchId.addEventListener("input", handleSearch);
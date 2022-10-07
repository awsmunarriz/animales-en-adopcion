var data = [
  {
    id: 1,
    nombre: "China",
    edad_aprox: "Casi dos años",
    tamaño: "mediano",
    tipo: "Gato",
    raza: "Cruza",
    genero: "H",
    vacunas: "Todas",
    castrado: false,
    visita_vete: "10-22-2022",
    tratamiento: "ninguno",
    actividades: ["Romper cartón", "Domadora de sillón"],
    cualidades: ["agil"],
    discapacidad: "ninguna",
    pelaje: "Largo",
    caracter: ["amigable"],
    enfermedades: "ninguna",
    comida: ["iams", "pescado"],
    img: "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg",
    adoptado: false,
  },
  {
    id: 2,
    nombre: "Pipo",
    edad_aprox: "12",
    tamaño: "mediano",
    tipo: "Perro",
    raza: "Mestizo",
    genero: "M",
    vacunas: "todas",
    castrado: true,
    visita_vete: "si",
    tratamiento: "ninguno",
    actividades: ["el piso es mi mejor amigo"],
    cualidades: ["patas marrones", "pecho blanco"],
    discapacidad: "ninguna",
    pelaje: "corto",
    caracter: ["vago"],
    enfermedades: "ninguna",
    comida: ["Pedigree", "lo que haya en la mesa"],
    img: "https://www.investigacionyciencia.es/images/21536/articleImage-minimal.jpg",
    adoptado: false,
  },
  {
    id: 3,
    nombre: "Mia",
    edad_aprox: "3 años",
    tamaño: "pequeño",
    tipo: "gata",
    raza: "comun",
    genero: "H",
    vacunas: "todas",
    castrado: false,
    visita_vete: "trimestral",
    tratamiento: "gotasdiar",
    actividades: ["juega todo el dia"],
    cualidades: ["cariñosa"],
    discapacidad: "visual",
    caracter: ["no"],
    comida: ["vitalcat"],
    img: "https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg",
    adoptado: false,
  },
  {
    id: 4,
    nombre: "sting",
    edad_aprox: "6",
    tamaño: "grande",
    tipo: "perro",
    raza: "labrador",
    genero: "masculino",
    vacunas: "todas",
    castrado: false,
    visita_vete: "10-22-2022",
    tratamiento: "ninguno",
    actividades: ["dormilon"],
    cualidades: ["es bueno con los niños"],
    discapacidad: "largo",
    pelaje: "false",
    caracter: ["jugueton"],
    enfermedades: "ninguna",
    comida: ["excellent"],
    img: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg",
    adoptado: false,
  },
  {
    id: 5,
    nombre: "Dexter",
    edad_aprox: "Dos años",
    tamaño: "mediano",
    tipo: "Gato",
    raza: "Cruza",
    genero: "H",
    vacunas: "Todas",
    castrado: true,
    visita_vete: "10-22-2022",
    tratamiento: "ninguno",
    actividades: ["Correr", "Jugar"],
    cualidades: ["mimoso"],
    discapacidad: "ninguna",
    pelaje: "Corto",
    caracter: ["temperamental"],
    enfermedades: "ninguna",
    comida: ["Nutrique"],
    img: "https://cdn.pixabay.com/photo/2016/11/29/11/26/dog-1869167_960_720.jpg",
    adoptado: false,
  },
  {
    id: 6,
    nombre: "Peperina",
    edad_aprox: "6 meses",
    tamaño: "Chico",
    tipo: "Perro",
    raza: "Labrador",
    genero: "H",
    vacunas: "Todas",
    castrado: false,
    visita_vete: "10-22-2022",
    tratamiento: "ninguno",
    actividades: ["Perseguir su cola", "Ladrarle a los pájaros"],
    cualidades: ["Juguetona, cariñosa"],
    discapacidad: "Ninguna",
    caracter: ["Tímida"],
    enfermedades: "Ninguna",
    comida: ["Carne cruda"],
    img: "https://i.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o",
    adoptado: false,
  },
  {
    id: 7,
    nombre: "Gala",
    edad_aprox: "4",
    tamaño: "mediano",
    tipo: "perro",
    raza: "galgo",
    genero: "H",
    vacunas: "todas",
    castrado: false,
    visita_vete: "03-08-2022",
    tratamiento: "no",
    actividades: ["Comer", "salir a pasear", "dormir"],
    cualidades: ["corre rápido", "salta en dos patas"],
    discapacidad: "no",
    caracter: ["amigable"],
    enfermedades: "ninguna",
    comida: ["Comida balanceada", "carne", "arroz", "verduras"],
    img: "https://www.tiendanimal.es/articulos/wp-content/uploads/2020/03/galgo.jpg",
    adoptado: false,
  },
  {
    id: 8,
    nombre: "Simba",
    edad_aprox: "Un año",
    tamaño: "mediano",
    tipo: "Gato",
    raza: "Cruza",
    genero: "H",
    vacunas: "2",
    castrado: false,
    visita_vete: "03-06-2022",
    tratamiento: "no",
    actividades: ["cazador", "sociable"],
    cualidades: ["trepador"],
    discapacidad: "ninguna",
    pelaje: "Corto",
    caracter: ["mimoso"],
    enfermedades: "no",
    comida: ["purina", "pollo"],
    img: "https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg",
    adoptado: false,
  },
  {
    id: 9,
    nombre: "Pepina",
    edad_aprox: "3 meses",
    tamaño: "pequeño",
    tipo: "Gato",
    raza: "Cruza",
    genero: "H",
    vacunas: "No se sabe",
    castrado: false,
    visita_vete: "-",
    tratamiento: "ninguno",
    actividades: ["Duerme", "Juega con pompóm", "Rasguña muebles"],
    cualidades: ["Trepadora"],
    discapacidad: "Ninguna",
    pelaje: "Largo",
    caracter: ["Amigable"],
    enfermedades: "Ninguna",
    comida: ["leche", "pollo"],
    img: "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2021-12/EL%20PRIMER%20D%C3%8DA%20DE%20UN%20GATO%20NUEVO%20EN%20CASA-1.jpg?itok=peJkgf-V",
    adoptado: false,
  },
  {
    id: 10,
    nombre: "rex",
    edad_aprox: "2 años",
    tamaño: "Grande",
    tipo: "Perro",
    raza: "Pastor Aleman",
    genero: "M",
    vacunas: true,
    castrado: false,
    visita_vete: "5-12-2022",
    tratamiento: "ninguno",
    actividades: ["Buscar rastros", "correr"],
    cualidades: ["buen olfato", "inteligente"],
    discapacidad: "ninguna",
    pelaje: "corto",
    caracter: ["amigable"],
    enfermedades: "ninguna",
    comida: ["perrarina", "carne"],
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F23%2Fpictures-of-german-shepherds-2000.jpg",
    adoptado: true,
  },
  {
    id: 11,
    nombre: "Rayo",
    edad_aprox: "2 años",
    tamaño: "Mediano",
    tipo: "Perro",
    raza: "Cruza",
    genero: "Macho",
    vacunas: "Completas",
    castrado: true,
    visita_vete: "15-10-2022",
    tratamiento: "Ninguno",
    actividades: ["Pasear con su peluche", "dormir", "jugar"],
    cualidades: ["Obediente", "dosil"],
    discapacidad: "ninguna",
    pelaje: "Corto",
    caracter: ["Cariñoso"],
    enfermedades: "ninguna",
    comida: ["Royal canin"],
    img: "https://www.animalfiel.com/wp-content/uploads/2020/07/perro-mediano-shiba-inu.jpg",
    adoptado: false,
  },
  {
    id: 12,
    nombre: "Pipina",
    edad_aprox: "8 Años",
    tamaño: "Chico",
    tipo: "Gato",
    raza: "Europeo comun",
    genero: "H",
    vacunas: "Completas",
    castrado: true,
    visita_vete: "Al dia",
    tratamiento: "Ninguno",
    actividades: ["Dormir , comer ,jugar"],
    cualidades: ["Cariñosa"],
    discapacidad: "Ninguna",
    pelaje: "Corto",
    caracter: ["Docil"],
    enfermedades: "Ninguna",
    comida: ["Royal canin"],
    img: "https://www.notigatos.es/wp-content/uploads/2016/03/gato_mestizo.jpg.webp",
    adoptado: true,
  },
  {
    id: 13,
    nombre: "Perla",
    edad_aprox: "Casi cinco años",
    tamaño: "pequeño",
    tipo: "Gato",
    raza: "Blanco y Negro",
    genero: "H",
    vacunas: "Todas",
    castrado: false,
    visita_vete: "10-22-2022",
    tratamiento: "ninguno",
    actividades: ["Abrir tacho de basura", "Cazar bichitos"],
    cualidades: ["agil"],
    discapacidad: "ninguna",
    pelaje: "Largo",
    caracter: ["amigable"],
    enfermedades: "ninguna",
    comida: ["excellent", "pollo"],
    img: "https://www.dogalize.com/wp-content/uploads/2017/02/image1.jpg",
    adoptado: true,
  },
  {
    id: 14,
    nombre: "Michi",
    edad_aprox: "2",
    tamaño: "mediano",
    tipo: "gato",
    raza: "persa",
    genero: "H",
    vacunas: "completas",
    castrado: false,
    visita_vete: "10-05-2022",
    tratamiento: "ninguno",
    actividades: ["pasear", "jugar con juguetes para gatitos", "dormir mucho"],
    cualidades: ["saltarina"],
    discapacidad: "ninguna",
    pelaje: "Largo y blanco",
    caracter: ["cariñosa", "muy sociable"],
    enfermedades: "ninguna",
    comida: ["Pedigree", "comida casera"],
    img: "https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/temas/gato_persa.jpg",
    adoptado: false,
  },
  {
    id: 15,
    nombre: "Bastest",
    edad_aprox: "9 años",
    tamaño: "Mediano",
    tipo: "Gato",
    raza: "De la calle",
    genero: "H",
    vacunas: "Ninguna",
    castrado: false,
    visita_vete: "Ninguna",
    tratamiento: "Ninguno",
    actividades: [
      "Cazar ratones, subirse a los techos y controlar el bienestar de los vecinos",
    ],
    cualidades: ["Te mantiene el barrio libre de ratones"],
    discapacidad: "Ninguna",
    pelaje: "Largo",
    caracter: ["Territorial"],
    enfermedades: "Ninguna",
    comida: ["Ratones"],
    img: "https://cdn.pixabay.com/photo/2020/02/26/19/33/cats-4882615_960_720.jpg",
    adoptado: false,
  },
  {
    id: 16,
    nombre: "Remi",
    edad_aprox: "Tres años",
    tamaño: "mediano",
    tipo: "Gato",
    raza: "American Shorthair",
    genero: "H",
    vacunas: "Todas",
    castrado: true,
    visita_vete: "04-14-2022",
    tratamiento: "ninguno",
    actividades: ["Dormir", "Afilar garras en todo tipo de telas"],
    cualidades: ["dormilona"],
    discapacidad: "ninguna",
    pelaje: "Corto",
    caracter: ["amigable"],
    enfermedades: "ninguna",
    comida: ["iams", "pescado"],
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F07%2Fgray-tabby-american-shorthair_757090435-1-2000.jpg",
    adoptado: false,
  },
  {
    id: 17,
    nombre: "Perno",
    edad_aprox: "4 años",
    tamaño: "mediano",
    tipo: "Perro",
    raza: "Beagle",
    genero: "M",
    vacunas: "Todas",
    castrado: false,
    visita_vete: "09-30-2022",
    tratamiento: "ninguno",
    actividades: ["Correr", "Buscar la pelota"],
    cualidades: ["agil"],
    discapacidad: "ninguna",
    pelaje: "corto",
    caracter: ["amigable", "jugueton"],
    enfermedades: "ninguna",
    comida: ["carne", "pollo", "alimento balanceado"],
    img: "https://www.animalfiel.com/wp-content/uploads/2021/03/tipos-de-beagle.jpg",
    adoptado: false,
  },
  {
    id: 18,
    nombre: "Pichichi",
    edad_aprox: "tres meses",
    tamaño: "mediano",
    tipo: "Gato",
    raza: "Mestizo",
    genero: "M",
    vacunas: "Todas",
    castrado: true,
    visita_vete: "10-29-2022",
    tratamiento: "ninguno",
    actividades: ["Jugar con un ratón de peluche", "Comer comer comer"],
    cualidades: ["agil, rapido, dormilon"],
    discapacidad: "ninguna",
    pelaje: "corto",
    caracter: ["cariñoso"],
    enfermedades: "ninguna",
    comida: ["Cat Chow"],
    img: "https://cdn.pixabay.com/photo/2016/11/29/11/26/dog-1869167_960_720.jpg",
    adoptado: true,
  },
  {
    id: 19,
    nombre: "Demira",
    edad_aprox: "1 Año",
    tamaño: "Chico",
    tipo: "Gato",
    raza: "Cruza",
    genero: "H",
    vacunas: "Todas",
    castrado: true,
    visita_vete: "30-09-2022",
    tratamiento: "Ninguno",
    actividades: ["Dormir, comer plástico, jugar con cualquier cosa"],
    cualidades: ["Juguetona"],
    discapacidad: false,
    caracter: ["Amigable"],
    enfermedades: false,
    comida: ["cualquiera"],
    img: "https://i.pinimg.com/originals/8a/14/94/8a14945dab88181d8f4ea8eb6050ac53.jpg",
    adoptado: false,
  },
  {
    id: 20,
    nombre: "Lucy",
    edad_aprox: "5 meses",
    tamaño: "pequeño",
    tipo: "Gato",
    raza: "tricolor",
    genero: "F",
    vacunas: "Todas",
    castrado: false,
    visita_vete: "10-05-2022",
    tratamiento: "ninguno",
    actividades: ["duerme mucho", "trepa por todos lados", "juega con perros"],
    cualidades: ["mimosa"],
    discapacidad: "ninguna",
    pelaje: "lacio",
    caracter: ["tranquila"],
    enfermedades: "ninguna",
    comida: ["cat show Gatitos"],
    img: "https://www.revistapetlovers.com/wp-content/uploads/2020/05/237878-1600x1030-gato-calico-e1590533253531-1160x747.jpg",
    adoptado: false,
  },
  {
    id: 21,
    nombre: "Miyagi",
    edad_aprox: "9 meses",
    tamaño: "chico",
    tipo: "Gato",
    raza: "Cruza",
    genero: "M",
    vacunas: "Todas",
    castrado: false,
    visita_vete: "10-30-2022",
    tratamiento: "ninguno",
    actividades: ["Subirse a los muebles", "Salir al balcón"],
    cualidades: ["va solo a las piedritas"],
    discapacidad: "ninguna",
    pelaje: "corto",
    caracter: ["juguetón"],
    enfermedades: "ninguna",
    comida: ["Royal Canin", "atún", "pollo"],
    img: "https://t2.ea.ltmcdn.com/es/posts/2/0/2/europeo_25202_3_600.jpg",
    adoptado: true,
  },
  {
    id: 22,
    nombre: "Dexter",
    edad_aprox: "Dos años",
    tamaño: "mediano",
    tipo: "Gato",
    raza: "Cruza",
    genero: "H",
    vacunas: "Todas",
    castrado: true,
    visita_vete: "10-22-2022",
    tratamiento: "ninguno",
    actividades: ["Correr", "Jugar"],
    cualidades: ["mimoso"],
    discapacidad: "ninguna",
    pelaje: "Corto",
    caracter: ["temperamental"],
    enfermedades: "ninguna",
    comida: ["Nutrique"],
    img: "https://cdn-e360.s3-sa-east-1.amazonaws.com/gato-atigrado-naranja-large-UQjaMxhlLo.jpg",
    adoptado: false,
  },
  {
    id: 23,
    nombre: "Codito",
    edad_aprox: "2 años",
    tamaño: "grande",
    tipo: "Gato",
    raza: "Cruza",
    genero: "M",
    vacunas: "ninguna",
    castrado: false,
    visita_vete: "04-02-2021",
    tratamiento: "ninguno",
    actividades: ["Dormir", "Jugar"],
    cualidades: ["Buenito"],
    discapacidad: "ninguna",
    pelaje: "Negro",
    caracter: ["loquito"],
    enfermedades: "ninguna",
    comida: ["Gati", "4 Huellas"],
    img: "https://tn.com.ar/resizer/NkDjvHaMLgyHIqtPNGz2-9RBjJ8=/1440x0/smart/arc-anglerfish-arc2-prod-artear.s3.amazonaws.com/public/KJYG7LICENYUF534N7WT5VZ75Q.jpg",
    adoptado: false,
  },
  {
    id: 24,
    nombre: "Lola",
    edad_aprox: "4 años",
    tamaño: "Mediano",
    tipo: "Perro",
    raza: "Mestizo",
    genero: "H",
    vacunas: "Todas",
    castrado: true,
    visita_vete: "05-09-2022",
    tratamiento: "ninguno",
    actividades: ["Revolear ramas de palmera", "Siesta al sol"],
    cualidades: ["hace sus necesidades afuera"],
    discapacidad: "ninguna",
    pelaje: "Corto",
    caracter: [
      "tranquila",
      "mimosa",
      "Se lleva bien con niños",
      "se adapta con otros perritos",
    ],
    enfermedades: "ninguna",
    comida: ["Dogui"],
    img: "https://www.investigacionyciencia.es/images/21536/articleImage-minimal.jpg",
    adoptado: false,
  },
  {
    id: 25,
    nombre: "Edo",
    edad_aprox: "Un año",
    tamaño: "mediano",
    tipo: "Gato",
    raza: "Cruza",
    genero: "H",
    vacunas: "Todas",
    castrado: true,
    visita_vete: "05-10-2022",
    tratamiento: "ninguno",
    actividades: ["dormir", "rasguñar zapatos"],
    cualidades: ["traer la rama", "responder"],
    discapacidad: "ninguna",
    pelaje: "Largo",
    caracter: ["amigable"],
    enfermedades: "ninguna",
    comida: ["pollo", "pescado"],
    img: "https://i.ibb.co/JdfCMzC/IMG-20220128-145114.jpg",
    adoptado: true,
  },
  {
    id: 26,
    nombre: "Cualincha",
    edad_aprox: "Casi un año",
    tamaño: "medio",
    tipo: "Negro amarronado",
    raza: "Gato",
    genero: "H",
    vacunas: "todas",
    castrado: true,
    visita_vete: "-",
    tratamiento: "-",
    actividades: ["Dormir en el patio", "Desaparecer de noche"],
    cualidades: [
      "Vigilar el frente cuando te vas a hacer mandados",
      "Saltar sin tirar ni romper nada",
    ],
    discapacidad: "-",
    pelaje: "Cualincho",
    caracter: "Mañosa",
    enfermedades: "-",
    comida: ["Nutribon XQ", "Quesito", "Asado"],
    img: "https://i.ibb.co/mb1c3qr/cualincha.jpg",

    adoptado: false,
  },
  {
    id: 27,
    nombre: "Choco",
    edad_aprox: "2 años",
    tamaño: "mediano",
    tipo: "Perro",
    raza: "Cruza",
    genero: "H",
    vacunas: "Todas",
    castrado: false,
    visita_vete: "12-01-2023",
    tratamiento: "ninguno",
    actividades: ["Jugar en la plaza", "Nadar"],
    cualidades: "ágil",
    discapacidad: "ninguna",
    pelaje: "Largo",
    caracter: ["amigable", "juguetón"],
    enfermedades: "ninguna",
    comida: ["balanceado", "atún"],
    img: "https://img.freepik.com/foto-gratis/primer-plano-vertical-perro-marron-parque_181624-60901.jpg?w=360&t=st=1665003730~exp=1665004330~hmac=20e1c08a24af5cef51340c6fd6f6a92ca327f4a0a5ddb3ee159aba55a1af811c",

    adoptado: false,
  },
  {
    id: 28,
    nombre: "Charly",
    edad_aprox: "ocho",
    tamaño: "mediano",
    tipo: "perro",
    raza: "caniche",
    genero: "M",
    vacunas: "todas",
    castrado: false,
    visita_vete: "si",
    tratamiento: "ninguno",
    actividades: ["corre en el parque, protégé la casa"],
    cualidades: ["patas marrones", "pecho blanco"],
    discapacidad: "ninguna",
    pelaje: "mediano",
    caracter: ["jugeton, nervioso"],
    enfermedades: "ninguna",
    comida: ["de todo"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0RJ0wFDgCjyaGgfq7QfvCMq3P4MxeFJRAw&usqp=CAU",
    adoptado: true,
  },
  {
    id: 29,
    nombre: "Oliver Twist Kahn",
    edad_aprox: "6 meses",
    tamaño: "pequeño",
    tipo: "Gato",
    raza: "De la calle",
    genero: "H",
    vacunas: "Ninguna",
    castrado: false,
    visita_vete: "Ninguna",
    tratamiento: "Ninguno",
    actividades: [
      "comprobar estado físico de las piernas de sus dueños y de visitas, subirse a los techos y podar rosas",
    ],
    cualidades: ["Dueño de la cama"],
    discapacidad: "Ninguna",
    pelaje: "Largo",
    caracter: ["Bipolar"],
    enfermedades: "Ninguna",
    comida: ["9lives"],
    img: "https://cf.ltkcdn.net/gatos/images/orig/242328-1600x1030-gato-negro.jpg",
    adoptado: false,
  },
  {
    id: 30,
    nombre: "Firulais",
    edad_aprox: "6 meses",
    tamaño: "Grande",
    tipo: "Perro",
    raza: "cruza",
    genero: "Macho",
    vacunas: "Si",
    castrado: true,
    visita_vete: "15/8/2022",
    tratamiento: "Ninguno",
    actividades: ["Correr, dormir y jugar en la plaza"],
    cualidades: ["Mimoso"],
    discapacidad: "No",
    caracter: ["Amigable"],
    enfermedades: "No",
    comida: ["Variada"],
    img: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
    adoptado: true,
  },
  {
    id: 31,
    nombre: "Jazmin",
    edad_aprox: "4",
    tamaño: "grande",
    tipo: "gato",
    raza: "ninguna",
    genero: "H",
    vacunas: "todas",
    castrado: true,
    visita_vete: "4-1-2022",
    tratamiento: "ninguno",
    actividades: ["dormir", "jugar"],
    cualidades: ["divertida", "carñiosa"],
    discapacidad: "ninguna",
    pelaje: "largo",
    caracter: ["docil"],
    enfermedades: "alergia",
    comida: ["Purina", "atun"],
    img: "https://cdn.pixabay.com/photo/2016/01/12/16/50/cat-1136084_960_720.jpg",
    adoptado: true,
  },
];
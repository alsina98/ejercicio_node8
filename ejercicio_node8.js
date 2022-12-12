const misDatos = {
    nombre: "Jordi",
    apellido: "Alsina",
    edad: 24,
    altura: 1.79,
    isDeveloper: true
};

console.log(misDatos);

let miEdad = misDatos.edad;

console.log(miEdad);

const datosAlex = {...misDatos}

datosAlex.nombre = "Alex";
datosAlex.apellido = "Gutierrez";
datosAlex.edad = 29;
datosAlex.altura = 1.85;
datosAlex.isDeveloper = false;

const datosSonia = {...misDatos}

datosSonia.nombre = "Sonia";
datosSonia.apellido = "Martinez";
datosSonia.edad = 21;
datosSonia.altura = 1.69;
datosSonia.isDeveloper = true;

let listaDatos = [misDatos, datosAlex, datosSonia]

listaDatos.forEach(value => {
    console.log(value);
})

listaDatos.sort((a, b) => b.edad - a.edad);

listaDatos.forEach(value => {
    console.log(value);
})

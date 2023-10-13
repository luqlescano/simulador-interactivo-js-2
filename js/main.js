let nombreUsuario = prompt("Ingresar nombre:").trim();

function saludarUsuario() {
    while(nombreUsuario === null || !isNaN(nombreUsuario)) {
        alert("El tipo de dato ingresado no está permitido, volvé a intentar...");
        nombreUsuario = prompt("Ingresar nombre:").trim();
    }
    alert("Hola " + nombreUsuario.toUpperCase() + ", bienvenid@.\nIMPORTANTE: Los resultados los vas a ver por Consola (F12).");
}

saludarUsuario();

let queQueresHacerUsuario = prompt("En este simulador vas a poder buscar un auto por marca ó agregar un nuevo auto a la lista...\n\nSi querés buscar un auto por marca, INGRESÁ EL NÚMERO: 1\n\nSi queres agregar un auto nuevo a la lista, INGRESÁ EL NÚMERO: 2").trim();

function queQueresHacer() {
    while(queQueresHacerUsuario !== "1" && queQueresHacerUsuario !== "2") {
        alert("Tenes que ingresar el número 1 ó 2...");
        queQueresHacerUsuario = prompt("En este simulador vas a poder buscar un auto por marca ó agregar un nuevo auto a la lista...\n\nSi querés buscar un auto por marca, INGRESÁ EL NÚMERO: 1\n\nSi queres agregar un auto nuevo a la lista, INGRESÁ EL NÚMERO: 2").trim();
    }
}

queQueresHacer();

const Auto = function (marca, modelo, anio, estado) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.estado = estado;
}

let autoUno = new Auto ("Peugeot", "208", 2015, "Usado");
let autoDos = new Auto ("Honda", "Fit", 2010, "Usado");
let autoTres = new Auto ("Ford", "Fiesta", 2003, "Usado");
let autoCuatro = new Auto ("Citroen", "C3", 2017, "Usado");
let autoCinco = new Auto ("Ford", "Fiesta", 1995, "Usado");
let autoSeis = new Auto ("Volkswagen", "Polo", 2023, "Nuevo");

let listaAutos = [autoUno, autoDos, autoTres, autoCuatro, autoCinco];

function buscarAuto() {
    let busquedaUsuario = prompt("Escribí una marca de auto, ejemplo: Ford.\n¿Qué marca de auto querés buscar?").trim().toLowerCase();

    while(busquedaUsuario === null || !isNaN(busquedaUsuario)) {
        alert("El tipo de dato ingresado no está permitido, volvé a intentar...");
        busquedaUsuario = prompt("Escribí una marca de auto, ejemplo: Ford.\n¿Qué marca de auto querés buscar?").trim().toLowerCase();
    }

    let resultadoBusqueda = listaAutos.filter((auto)=>auto.marca.toLowerCase().includes(busquedaUsuario));

    if (resultadoBusqueda.length > 0) {
        console.table(resultadoBusqueda);
        alert("¡Gracias por usar el simulador!\nEspero que te haya gustado...\n\nSi querés iniciar el simulador nuevamente, actualizá la página.\n¡Nos vemos la próxima!")
    } else {
        alert("No se encontró ningún auto de marca: " + busquedaUsuario.toUpperCase() + "\n\nSi querés iniciar el simulador nuevamente, actualizá la página.\n¡Nos vemos la próxima!");
    }
}

function crearAuto() {
    let marca = prompt("Ingresá la MARCA:").trim();
    let modelo = prompt("Ingresá el MODELO:").trim();
    let anio = parseInt(prompt("Ingresar AÑO:"));
    let estado = prompt("Ingresá el ESTADO:").trim();
    
}

if (queQueresHacerUsuario === "1") {
    buscarAuto();
}

if (queQueresHacerUsuario === "2") {
    crearAuto();
}
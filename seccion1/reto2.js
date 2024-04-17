const listSouvenirs = [];
let nombre, precio, disponibilidad;
let tiposDeDatosCorrectos = true;

while(tiposDeDatosCorrectos){
    
    compra = prompt("Va a agregar un souvenir? si/no: ").toUpperCase();
    if (compra === ("SI")){
        nombre = prompt("Ingresa el nombre del souvenir: ");
        precio = Number(prompt("Ingresa el valor del souvenir: "));
        disponibilidad = confirm("Presione OK si esta disponible");
        const souvenir = {
            nombre,
            precio,
            disponibilidad,
        };
        listSouvenirs.push(souvenir);
    } else break
    

    tiposDeDatosCorrectos = typeof nombre === 'string' && !isNaN(precio) && disponibilidad;
    if (tiposDeDatosCorrectos){
        alert("Has ingresado los datos correctamente")
    
    } else console.log("Has ingresado un dato incorrecto")
}



console.log(listSouvenirs)
let presupuesto = Number(prompt("Escriba el presupuesto total inicial para el viaje: "));
let alojamiento = Number(prompt("Escriba el costo estimado para el alojamiento: "));
let transporte = Number(prompt("Escriba el costo estimado para el transporte: "));
let comida = Number(prompt("Escriba el costo estimado para la alimentación: "));
const umbral = Number(prompt("Minimo, Cuanto dinero considera necesario para gastos imprevistos o emergencias: "))
let calculo = (alojamiento + transporte + comida + umbral);
let restante = (presupuesto - calculo);
const listExtras = [];
while(restante >= (umbral)){
    let compra = prompt("Desea comprar un articulo extra? si/no: ").toUpperCase();
    if (compra === ("SI")){
        let nombre = prompt("Cual es el articulo? ");
        let precio = Number(prompt("Cual es el valor del articulo: "));
        restante = restante - precio;
        if (restante >= (umbral)){
            console.log("Puedes comprar el articulo");
            const extra = {
                nombre,
                precio,
            }
            listExtras.push(extra);
        } else {
            console.log("Debes evitar gastos gastos adicionales");
        }
    } else break
}

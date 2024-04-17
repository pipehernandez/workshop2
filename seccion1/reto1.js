const lugar = prompt("Escriba el lugar elegido para el viaje: ");
let dias = Number(prompt("Esciba la cantidad de dias: "));
let presupuesto = Number(prompt("Escriba el presupuesto"));
let dineroXDia = Number(prompt("Escriba el estimado a gastar por dia en el viaje"))
let calculo = dineroXDia * dias;

if (calculo > presupuesto){
    console.log("Debes ajustar el presupuesto o la duración del viaje");
} else console.log("El presuesto esta bien");

let diario, comer, libro, prioridad;
let dia = true;
while(dia){
    diario = Number(prompt("Escriba su presupuesto diario: "));
    const ahorro = Number(prompt("Escriba un ahorro diario que quisieras: "));
    comer = Number(prompt("Escriba el costo de la comida: "));
    libro = Number(prompt("Escriba el costo del libro: "));
    prioridad = prompt("Escriba su prioridad a comprar, libro/comida").toUpperCase();
    if ((ahorro + comer + libro) <= diario){
        console.log("Puedes comprar la comida y el libro, y tener el ahorro que deseas.");
        dia = confirm("Presione cancel para salir del programa.");
    } else if ((ahorro + comer + libro) > diario && prioridad === "LIBRO"){
        if ((ahorro + libro) <= diario){
            console.log("Puedes comprar el libro. Ya que no puedes comprar ambos y tener el ahorro que deseas");
            dia = confirm("Presione cancel para salir del programa.");
        } else {
            console.log("No puedes comprar el libro. Por que si lo compras no tendras el ahorro que deseas.")
            dia = confirm("Presione cancel para salir del programa.");
        }
    } else if ((ahorro + comer + libro) > diario && prioridad === "COMIDA"){
        if ((ahorro + comer) <= diario){
            console.log("Puedes comprar la comida. Ya que no puedes comprar ambos y tener el ahorro que deseas");
            dia = confirm("Presione cancel para salir del programa.");
        } else {
            console.log("No puedes comprar la comida. Por que si la compras no tendras el ahorro que deseas.")
            dia = confirm("Presione cancel para salir del programa.");
        }

    } else console.log("No puedes comprar ninguno y tener el ahorro que deseas.")
}

if (comer < libro){
    console.log("Para ahorrar mas deberias comer ya que la comida tiene menor precio que el libro")
} else console.log("Para ahorrar mas deberias comprar el libro ya que el libro tiene menor precio que la comida")



const listaObjetosLluvia = [];
const listaObjetosSol = [];
let clima, espacio, peso, objeto, eliminar, afterDeleted;
let viaje = true;
while(true){
    peso = confirm("Presione Ok si 'NO' ha pasado el limite de peso de su maleta...");
    if (peso){
        espacio = confirm("Presione OK si tiene espacio libre en la maleta...");
        if (espacio){
            clima = prompt("Como esta el clima: lluvioso/soleado").toUpperCase();
            if (clima === "LLUVIOSO"){
                objeto = prompt("Que objeto deseas llevar?");
                listaObjetosLluvia.push(objeto);
            } else if(clima === "SOLEADO"){
                objeto = prompt("Que objeto deseas llevar?");
                listaObjetosSol.push(objeto);
            }
        } else {
            confirm("Ya no cuentas con espacio en la maleta.");
            eliminar = confirm("Presione OK si desea Eliminar algun objeto de su maleta?");
            if (eliminar){
                console.log("Objetos para dia lluvioso: ",listaObjetosLluvia);
                console.log("Objetos para dia soleado: ",listaObjetosSol);
                objeto = prompt("Escriba el objeto que desea eliminar de la lista");
                afterDeleted = listaObjetosLluvia.filter(e => {
                    return !(e === objeto)
                })
                afterDeleted = listaObjetosSol.filter(e => {
                    return !(e === objeto)
                })
            } else break
        }
    } else {
        confirm("Ha sobrepasado el peso de su maleta.");
        eliminar = confirm("Presione OK si desea Eliminar algun objeto de su maleta?");
        if (eliminar){
            console.log("Objetos para dia lluvioso: ",listaObjetosLluvia);
            console.log("Objetos para dia soleado: ",listaObjetosSol);
            objeto = prompt("Escriba el objeto que desea eliminar de la lista");
            afterDeleted = listaObjetosLluvia.filter(elemento => {
                return !(elemento === objeto)
            })
            afterDeleted = listaObjetosSol.filter(elemento => {
                return !(elemento === objeto)
            })
        } else break
    }
}
console.log(afterDeleted);
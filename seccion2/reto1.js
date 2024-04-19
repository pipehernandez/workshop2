let energia, clima, trabajo;
let decision = 1
let continuar = true;
while(continuar){
    energia = confirm("Presione OK si tienes buena energia...");
    clima = confirm("Presione OK si esta haciendo buen clima...");
    trabajo = confirm("Presione OK si tiene trabajo para hacer");
    if (energia && clima && trabajo){
        console.log("Decisión",decision, ": Deberias salir a correr, o hacer trabajo pendiente.");
        decision ++;
        continuar = confirm("Presione OK si quiere tomar otra decisión...");
    } else if (energia && !clima && trabajo){
        console.log("Decisión",decision,": Deberias hacer trabajo pendiente.");
        decision ++;
        continuar = confirm("Presione OK si quiere tomar otra decisión...");
    } else if (!energia && clima && trabajo){
        console.log("Decisión",decision,": Deberias descansar y luego hacer trabajo pendiente.");
        decision ++;
        continuar = confirm("Presione OK si quiere tomar otra decisión...");
    } else if (energia && clima && !trabajo){
        console.log("Decisión",decision,": Deberias salir a correr.");
        decision ++;
        continuar = confirm("Presione OK si quiere tomar otra decisión...");
    } else if (!energia && !clima && !trabajo){
        console.log("Decisión",decision,": Deberias descansar.");
        decision ++;
        continuar = confirm("Presione OK si quiere tomar otra decisión...");
    } else if (!energia && clima && !trabajo){
        console.log("Decisión",decision,": Deberias descansar.");
        decision ++;
        continuar = confirm("Presione OK si quiere tomar otra decisión...");
    } else if (!energia && !clima && trabajo){
        console.log("Decisión",decision,": Deberias descansar y luego hacer trabajo.");
        decision ++;
        continuar = confirm("Presione OK si quiere tomar otra decisión...");
    } else if (energia && !clima && !trabajo){
        console.log("Decisión",decision,": Deberias hacer ejercicio en casa.");
        decision ++;
        continuar = confirm("Presione OK si quiere tomar otra decisión...");
    } 
}

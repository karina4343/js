// PARA EL INICIO

let nombre = prompt ("ingrese el nombre de su mascota para conocernos mejor");
console.log(`El nombre de la mascota es: ${nombre}`);




let mascota= prompt(`seleccione su mascota:
    1: Perros
    2: Gatos
    3: Animales exoticos
    4: Aves
    5: Roedores
`)

switch (mascota) {
    case "1":
        console.log("Perros")
        
        break;
    case "2":
        console.log("Gatos")
        
        break;
    case "3":
        console.log("Animales exoticos")
            
        break;
    case "4":
        console.log("Aves")
                
        break;
    case "5":
        console.log("Roedores")
                            
         break;

    default:
        console.log("Ninguna opcion válida")
        break;
}


//LO QUE NECESITA EL CLIENTE 

let servicio = prompt ("seleccione su servicio 1: Turno con un veterinario 2:Accesorios 3:Alimentos");

if (servicio === "1") {
    alert ("Seleccionaste Turno con un veterinario");
} else if (servicio === "2") {
    alert ("Seleccionaste Accesorios");
} else if (servicio === "3"){
    alert ("Seleccionaste Alimentos");
}
//si selecciono turno 
let turno = prompt (`ingrese una opcion:
1:Consulta
2:Control por alguna operacion/enfermedad
3:Cancelar`)

while(turno !== "3"){
    if (turno === "1") {
   let Motivos = prompt("Motivos de la consulta");
   alert (Motivos); 
   turno = "3" 
    }
    if (turno === "2"){
        let fecha =prompt("ultima fecha del control");
        alert (fecha);
        turno = "3" 
    }
}

//si selecciona producto para hacer la SUMA de su compra 

let GastosVeterinario = Number(prompt("Ingrese su primer precio"))
let Alimento  = Number(prompt("Ingrese su segundo precio"))
let operacion = prompt("ingrese la operacion a efectuar")

function gastos(GastosVeterinario, Alimento, operacion){
    switch(operacion){
        case "+":
            return GastosVeterinario + Alimento
        break;
        default:
            return 0
        break
    }
}
console.log(gastos(GastosVeterinario, Alimento, operacion))


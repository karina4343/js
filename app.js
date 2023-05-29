// PARA EL INICIO

const cliente = { nombre: prompt ("ingrese su nombre") ,
apellido : prompt ("ingrese su apellido") ,
email : prompt ("ingrese su correo electronico") ,
direccion : prompt ("ingrese su direccion"),
}

console.log (cliente ["nombre"])
console.log (cliente ["apellido"])
console.log (cliente ["corrreo"])
console.log (cliente ["direccion"])

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
    turno = prompt ("vuelva a elegir una opcion \n 1:Consulta \n 2:Control por alguna operacion/enfermedad \n 3:Cancelar" )
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

class alimento{
    constructor ( balanceado , precio){
        this.balanceado = balanceado;
        this.precio = precio;
    }
}

const precios = [
    {balanceado: "Royal canin" , precio: "$2060"},
    {balanceado: "Eucanuba" , precio: "$1680"},
    {balanceado: "Pro plan" , precio: "$2249"},
    {balanceado: "Sieger" , precio: "$1870"},
    {balanceado: "Nutrique" , precio: "$2575"},
    {balanceado: "Excellent" , precio: "$1085"},
]

//no funciona ver 
function mejorCalidad () { 
    const oportunidad = precios.filter ((comida) => comida.precio > 2500) ;
    for(const oportunidad of oportunidades ){
        alert( `el mejor balanceado es : balanceado ${oportunidad.balanceado} con un precio de ${oportunidad.precio}`);
    }
    
}


function agregar (){
    let balanceado = prompt ("eliga el balanceado que necesite \n 1:Royal canin $2060  \n 2: Eucanuba $1680  \n 3: Pro plan $2249 \n 4: Sieger $1870  \n 5: Nutrique $2575 \n 6:Excellent $1085");
    let precio = prompt ("ingrese su precio");
    const nuevoAlimento = new alimento (balanceado , precio);
    carrito.push(nuevoAlimento);
    alert ("Nuevo alimento añadido");
}

let carrito = [] ;

function ver(){
    carrito.forEach ((Alimento) =>{
        alert (`elegiste alimento ${Alimento.balanceado} con un costo de ${Alimento.precio}`) ;
    })
}

let selecciona = prompt (`ingrese una opcion:
1: Mostrar balanceado de calidad
2: Ingresar alimento necesario
3: ver carrito
4: fin de la compra`)

while(selecciona !== "4"){
    if (selecciona === "1") {
        mejorCalidad();
    }
    if (selecciona === "2"){
        agregar (carrito);
    }
    if (selecciona === "3"){
        ver();
    }
    selecciona = prompt ("vuelva a elegir una opcion \n 1:mostrar balanceado de calidad \n 2:ingresar el alimento necesario \n 3:ver carrito \n 4:fin de la compra" )
}
 alert ("Gracias por visitarnos") ;
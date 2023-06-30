//ATENCION VETERINARIA

const turnoForm = document.querySelector('#turno_form');
<<<<<<< HEAD
=======

>>>>>>> 26f891b1cc71a884636d3f5f570fbd91029c0031
const listaTurnos = document.getElementById('lista_turnos');

turnoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const mascota = document.getElementById('mascota').value;
  const edad = document.getElementById('edad').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const observaciones = document.getElementById('observaciones').value;

<<<<<<< HEAD
pintarInfo(nombre,telefono,mascota,edad,fecha,hora, observaciones);
=======
  // console.log(nombre, telefono, mascota, edad, fecha, hora, observaciones);

  pintarInfo(nombre, telefono, mascota, edad, fecha, hora, observaciones);

>>>>>>> 26f891b1cc71a884636d3f5f570fbd91029c0031
});
const pintarInfo = (nombre, telefono, mascota, edad, fecha, hora, observaciones) => {
listaTurnos.innerHTML += `
<p>${nombre}</p>
<p>${telefono}</p>
<p>${mascota}</p>
<p>${edad}</p>
<p>${fecha}</p>
<p>${hora}</p>
<p>${observaciones}</p>

<<<<<<< HEAD
const pintarInfo =(nombre,telefono,mascota,edad,fecha,hora,observaciones) => {
  listaTurnos.innerHTML += `
  <p> ${nombre}</p>
  <p>${telefono}</p>
  <p> ${mascota}</p>
  <p> ${edad}</p>
  <p> ${fecha}</p>
  <p> ${hora}</p>
  <p> ${observaciones}</p>
  `
}


=======
`
}





>>>>>>> 26f891b1cc71a884636d3f5f570fbd91029c0031
//PRODUCTOS
/*
const contenedorId = document.getElementById ("contenedorProductos");
const verCarrito = document.getElementById("verCarrito");
const carroContenedor = document.getElementById("carroContenedor");
const cantidadCarrito = document.getElementById("cantidadCarrito");


 let carrito = JSON.parse (localStorage.getItem("carrito")) || [];

 const getProductos = async () => {
  const respuesta =  await fetch("../data.json");
  const info = await respuesta.json();

  info.forEach ((product) =>{
    let content = document.createElement("div");
    content.className ="class";
    content.innerHTML = `
    <img src="${product.imagen}">
    <h3> ${product.descripcion} 
    <p class="precio"> $ ${product.precio} </p>
    `
  
    let comprar = document.createElement("button");
    comprar.innerText = "Agregar al carrito";
    comprar.className = "agregar";
  
    content.append(comprar);
  
  
    comprar.addEventListener("click", () => {
  
      const repetido = carrito.some((repetidoProduct)=> repetidoProduct.id === product.id);
  
      if(repetido){
        carrito.map((prod) => {
          if(prod.id === product.id){
            prod.cantidad ++;
          }
        });
  
  }else{
      carrito.push({
        id : product.id,
        imagen: product.imagen,
        descripcion : product.descripcion,
        precio : product.precio,
        cantidad : product.cantidad,
   });
  }
          console.log(carrito);
          carritocontenedor();
          local();
  });
   });
 };
 getProductos();

 

 const realizarCarrito = () => {
  carroContenedor.innerHTML = "";
  carroContenedor.style.display = "flex";
  const cuerpoCarro = document.createElement ("div");
  cuerpoCarro.className= "cuerpo-carro"
  cuerpoCarro.innerHTML =`
  <h1 class= "cuerpo-carro-titulo"> Carrito </h1>
  `;

  carroContenedor.append(cuerpoCarro);

  const cuerpobutton = document.createElement("h1");
  cuerpobutton.innerText = "cerrar";
  cuerpobutton.className = " cuerpo-boton";

  cuerpobutton.addEventListener("click", () => {
    carroContenedor.style.display = "none";
  })


  cuerpoCarro.append(cuerpobutton);

carrito.forEach((product) =>{
  let carritoContent= document.createElement("div")
  carritoContent.className = "carrito-cont"
  carritoContent.innerHTML= `
  <img src="${product.imagen}">
  <h3> ${product.descripcion} 
  <p class="precio"> $ ${product.precio} </p>
  <span class ="restar"> - </span>
  <p>Cantidad: ${product.cantidad}</p>
  <span class ="sumar"> + </span>
  <p> Total : ${product.cantidad * product.precio}</p>
  `;
  carroContenedor.append(carritoContent);

let restar = carritoContent.querySelector(".restar")
restar.addEventListener ("click", () =>{
  if(product.cantidad !== 1){
     product.cantidad --;
  }
  local();
  realizarCarrito();
  });

  let sumar= carritoContent.querySelector(".sumar");
  sumar.addEventListener("click", () => {
    product.cantidad++;
    local();
    realizarCarrito();
  });

  let eliminar = document.createElement("span");

  eliminar.innerText = "🗑";
  eliminar.className = "delete-product";
  carritoContent.append(eliminar);

  eliminar.addEventListener("click", eliminarProducto);
});



const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalPrecio = document.createElement("div")
totalPrecio.className="total.content"
totalPrecio.innerHTML = `total a pagar : $ ${total}`;
carroContenedor.append(totalPrecio);
 };

 verCarrito.addEventListener ("click", realizarCarrito);

const eliminarProducto = () => {
  const foundId = carrito.find((element)=> element.id);

  carrito = carrito.filter((carritoId)=> {
    return carritoId !== foundId;
  });
  carritocontenedor ();
  local();
  realizarCarrito();
};

const carritocontenedor = () => {
 

  const carritoLength= carrito.length;
  localStorage.setItem("carritoLegth" , JSON.stringify(carritoLength));
<<<<<<< HEAD
  cantidadCarrito.innerText=JSON.parse(localStorage.getItem("carritoLegth"));
=======
>>>>>>> 26f891b1cc71a884636d3f5f570fbd91029c0031
};


//set item 
const local = () => {
localStorage.setItem("carrito" , JSON.stringify(carrito));
};

carritocontenedor ();

*/





















 
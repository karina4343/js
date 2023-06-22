//ATENCION VETERINARIA
/*
const turnoForm = document.getElementById('turno_form');
const listaTurnos = document.getElementById('lista_turnos');

turnoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const mascota = document.getElementById('mascota').value;
  const edad = document.getElementById('edad').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const observaciones = document.getElementById('observaciones').value;


  const turno = {
    nombre,
    telefono,
    mascota,
    edad,
    fecha,
    hora,
    observaciones
  };

  // para limpiara el formulario
  turnoForm.reset();

  // Agregar el turno a la lista de turnos solicitado
  agregarTurnoPendiente(turno);
});

function agregarTurnoPendiente(turno) {
  const turnoItem = document.createElement('li');
  turnoItem.classList.add('turno_item');
  turnoItem.innerHTML = `
    <h3>${turno.mascota}</h3>
    <p><strong>Dueño/a:</strong> ${turno.nombre}</p>
    <p><strong>Teléfono:</strong> ${turno.telefono}</p>
    <p><strong>Fecha:</strong> ${turno.fecha}</p>
    <p><strong>Hora:</strong> ${turno.hora}</p>
  `;
  if (turno.observaciones !== '') {
    turnoItem.innerHTML += `<p><strong>Observaciones:</strong> ${turno.observaciones}</p>`;
  }
  listaTurnos.appendChild(turnoItem);
}*/

//PRODUCTOS
const contenedorId = document.getElementById ("contenedorProductos");
const verCarrito = document.getElementById("verCarrito");
const carroContenedor = document.getElementById("carroContenedor");
const cantidadCarrito = document.getElementById("cantidadCarrito");


const productos = [
  {
   id: 1,
   titulo: "Alimento balanceado para perro",
   descripcion: "ROYAL CANIN MINI ADULTO",
   precio: 2360,
   categoria: "Perro",
   imagen: "../imagenes/perros/royal1.png",
   cantidad :1,
  },
 
  {
   id: 2,
   titulo: "Alimento balanceado para perro 2",
   descripcion: "ROYAL CANIN CANICHE ADULTO",
   precio: 2640,
   categoria: "Perro",
   imagen: "../imagenes/perros/royal2.png",
   cantidad :1,
  },
 
  {
   id: 3,
   titulo: "Alimento balanceado para gato 1",
   descripcion: "PRO PLAN GATO STERILIZED",
   precio: 3699,
   categoria: "Gato",
   imagen: "../imagenes/gatos/gato1.png",
   cantidad :1,
  },

  {
    id: 3,
    titulo: "Alimento balanceado para gato 2",
    descripcion: "EXCELLENT GATO KITTEN",
    precio: 2330,
    categoria: "Gato",
    imagen: "../imagenes/gatos/gato2.png",
    cantidad :1,
   },

   {
    id: 3,
    titulo: "Accesorio para gato",
    descripcion: "RASCADOR TORRE COMARCA",
    precio: 28300,
    categoria: "Gatoaccesorio",
    imagen: "../imagenes/accesorios/accesorio10.png",
    cantidad :1,
   },

   {
    id: 3,
    titulo: "Accesorio para perro",
    descripcion: "KONG BALL (CON SOGA)",
    precio: 7140,
    categoria: "Perroaccesorio",
    imagen: "../imagenes/accesorios/accesorio13.png",
    cantidad :1,
   }
 ];

 let carrito = [];

 productos.forEach ((product) =>{
  let content = document.createElement("div");
  content.className ="class";
  content.innerHTML = `
  <img src="${product.imagen}">
  <h3> ${product.descripcion} 
  <p class="precio"> $ ${product.precio} </p>
  `
  contenedorProductos.append(content);

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
});
 });

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
  <p>Cantidad: ${product.cantidad}</p>
  <p> Total : ${product.cantidad * product.precio}</p>
  `;
  carroContenedor.append(carritoContent);

console.log(carrito.length);

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
  realizarCarrito();
};

const carritocontenedor = () => {
  cantidadCarrito.style.display = "block";
  cantidadCarrito.innerText = carrito.length;
};























 
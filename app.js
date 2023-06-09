//CREAR USUARIO
function crearCuenta() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirmar_contraseña').value;
    const mensaje = document.getElementById('mensaje');
  
    if (contraseña !== confirmarContraseña) {
      mensaje.innerText = 'Las contraseñas no coinciden';
      return;
    }
}

//INICIAR SESION
function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const mensaje = document.getElementById('mensaje');
}



//ATENCION VETERINARIA
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
    nombre: nombre,
    telefono: telefono,
    mascota: mascota,
    edad: edad,
    fecha: fecha,
    hora: hora,
    observaciones: observaciones
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
}


//CARRITO
let carrito = [];
let total = 0;

function agregarProducto(nombre, precio) {
  carrito.push({ nombre, precio });

  // Actualizar la lista del carrito
  const listaCarrito = document.getElementById('lista_carrito');
  listaCarrito.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item.nombre + ' - $' + item.precio;
    listaCarrito.appendChild(li);
  });

  // Actualizar el total
  total += precio;
  const totalSpan = document.getElementById('total');
  totalSpan.innerText = total;
}
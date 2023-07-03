//ATENCION VETERINARIA

const turnoForm = document.querySelector('#turno_form');
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


pintarInfo(nombre,telefono,mascota,edad,fecha,hora, observaciones);

  


});
const pintarInfo = (nombre, telefono, mascota, edad, fecha, hora, observaciones) => {
listaTurnos.innerHTML += `
<p>${nombre}</p>
<p>${telefono}</p>
<p>${mascota}</p>
<p>${edad}</p>
<p>${fecha}</p>
<p>${hora}</p>
<p>${observaciones}</p>`
}






















 
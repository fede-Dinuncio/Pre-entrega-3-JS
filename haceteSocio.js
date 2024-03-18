const Unico_socio = 21524;
let sociosRegistrados = JSON.parse(localStorage.getItem('socios')) || [{ nombre: "Pedro Gonzalez", documento: 30982223, numero: 21524 }];

function ingresarComoSocio() {
  let numeroSocio = prompt("Ingresa tu número de socio:");
  let socioEncontrado = sociosRegistrados.find(socio => socio.numero === parseInt(numeroSocio));
  if (socioEncontrado) {
    saludar();
    opcionesLogueado(socioEncontrado.nombre, socioEncontrado.documento, socioEncontrado.numero);
  } else {
    alert("Número de socio incorrecto");
  }
}

function hacerseSocio() {
  let nombre = prompt("Ingrese su nombre y apellido");
  let documento = prompt("Ingrese su documento");
  let nuevo_socio = {
    nombre: nombre,
    documento: documento,
    numero: Math.floor(Math.random() * (8000 - 1 + 1)) + 1
  };
  sociosRegistrados.push(nuevo_socio);
  localStorage.setItem('socios', JSON.stringify(sociosRegistrados));
  alert("Registrado con éxito, su número de socio es " + nuevo_socio.numero);
  opcionesLogueado(nuevo_socio.nombre, nuevo_socio.documento, nuevo_socio.numero);
}

function saludar() {
  document.getElementById('contenido').innerHTML = "<p>¡San Lorenzo, tu Club!</p>";
}

function opcionesLogueado(nombre, documento, numeroSocio) {
  document.getElementById('contenido').innerHTML = `
    <p>Nombre: ${nombre}</p>
    <p>Documento: ${documento}</p>
    <p>Número de socio: ${numeroSocio}</p>
    <button onclick="mostrarSociosRegistrados()">Mostrar todos los socios</button>
    <button onclick="cerrarSesion()">Cerrar sesión</button>
  `;
}

function cerrarSesion() {
  localStorage.removeItem('socios');
  location.reload();
}

function mostrarSociosRegistrados() {
  let listaSocios = "Socios registrados:<br>";
  sociosRegistrados.forEach(function(socio) {
    listaSocios += `Nombre: ${socio.nombre}, Documento: ${socio.documento}, Número de socio: ${socio.numero}<br>`;
  });
  document.getElementById('contenido').innerHTML = listaSocios;
}

function verificarNIT(nit) {
  // Expresión regular para validar un NIT en formato xxxxxxxxx-y
  var regex = /^[0-9]{9}-[0-9]$/;

  if (regex.test(nit)) {
    return true; // El NIT es válido
  } else {
    return false; // El NIT no es válido
  }
}

function ValidarNit() {
  const numeroNIT = document.getElementById("valueNit").value;
  if (verificarNIT(numeroNIT)) {
    console.log("El NIT es válido.");
  } else {
    console.log("El NIT no es válido.");
  }
}

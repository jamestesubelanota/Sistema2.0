function validarr() {
  var nombre, apellido, telefono, cc, genero, fechanan, correo, contraseña;
 nombre = document.getElementById("nombreRegistro").value;
 apellido = document.getElementById("nombreRegistro").value;
 telefono = document.getElementById("nombreRegistro").value;
 cc = document.getElementById("nombreRegistro").value;
 genero = document.getElementById("nombreRegistro").value;
 fechanan = document.getElementById("nombreRegistro").value;
 correo = document.getElementById("nombreRegistro").value;
 contraseña = document.getElementById("nombreRegistro").value;
if (nombre === "") {
  alert("el campo nombre esta basio");
  return false;

}


else if (apellido === "") {
 alert("el campo apellido esta basio");
return false;
}
}

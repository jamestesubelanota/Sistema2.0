function validarr() {

var nombre = document.getElementById("nombreRegistro").value;
var apellido = document.getElementById("apellido_registro").value;
var txtEdad2 = document.getElementById("telefono_registro").value;
var cedula = document.getElementById("numeroidRegistro").value;
var genero = document.getElementById("genero_registro").value;
var fechanan = document.getElementById("fecha_registro").value;
var txtCorreo = document.getElementById("exampleInputEmail").value;
var contraseña = document.getElementById("exampleInputPassword").value;


if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
  alert("el campo nombre esta vacio");
  return false;

}

if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
 alert("el campo apellido esta vacio");
return false;
}

if (!/^\d{9}$/ .test(txtEdad2)) {
 alert("el campo telefono no es un numero");
return false;
}
if (!/^\d{8}$/ .test(cedula)) {
 alert("el campo cedula esta vacio");
return false;
}
if (genero == null || genero.length == 0 || /^\s+$/.test(genero)) {
 alert("el campo genero esta vacio");
return false;
}
if (!isNaN(fechanan)) {
 alert("el campo fecha esta vacio");
return false;
}
if (!(/\w+([-+.']\w+)*@\w+\.\S+/.test(txtCorreo))){
 alert("el campo correo no es correcto");
return false;
}
if (contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)) {
 alert("el campo contraseña esta vacio");
return false;
}


}

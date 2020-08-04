function validarr() {
  var nombre, apellido, telefono, cc;
  var genero, fechanan, correo, contraseña;
 nombre = document.getElementById("nombreRegistro").value;
 apellido = document.getElementById("apellido_registro").value;
 telefono = document.getElementById("telefono_registro").value;
 cc = document.getElementById("numeroidRegistro").value;
 genero = document.getElementById("genero_registro").value;
 fechanan = document.getElementById("fecha_registro").value;
 correo = document.getElementById("exampleInputEmail").value;
 contraseña = document.getElementById("exampleInputPassword").value;


if (nombre === "") {
  alert("el campo nombre esta basio");
  return false;

}


else if (apellido === "") {
 alert("el campo apellido esta basio");
return false;
}

else if (telefono === "") {
 alert("el campo telefono apellido esta basio");
return false;
}
else if (cedula === "") {
 alert("el campo cedula esta basio");
return false;
}
else if (genero === "") {
 alert("el campo genero esta basio");
return false;
}
else if (fechanan === "") {
 alert("el campo fecha esta basio");
return false;
}
else if ( correo === "") {
 alert("el campo correo apellido esta basio");
return false;
}
else if (contraseña === "") {
 alert("el campo contraseña esta basio");
return false;
}
}

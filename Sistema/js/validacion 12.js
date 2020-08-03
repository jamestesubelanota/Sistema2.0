function validar(){
var login, password, exprecion;
login = document.getElementById("loginEmail").value;
password = document.getElementById("loginPassword").value;


if (login === "" ) {
  alert("El campo correo esta vacio");
  return false;

}

else if (password === "" ) {
  alert("El campo contraseña esta vacio");
  return false;

}

}

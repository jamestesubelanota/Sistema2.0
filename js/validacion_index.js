function validar(){
   var nombre, apellido, correo, mensaje, expresion;
    nombre = document.getElementById("Nombre_contacto").value;
    apellido = document.getElementById("Apellido_contacto").value;
    correo = document.getElementById("Correo_contacto").value;
    mensaje = document.getElementById("Mensaje_contacto").value;
    expresion = (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/);

      if(nombre === "" || apellido === "" || correo === "" || mensaje === ""){
      alert("todos los campos son obligarotios");
      return false
    }
    else if(nombre.length>15){
  alert("El  nombre es muy largo!");
  return false;
}
else if (apellido.length>15){
  alert("El apellido es muy largo");
return false;
}
else if (correo.length>100){
  alert("El  correo es muy largo");
return false;
}
 if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/).tets(correo)){
  alert("El  correo no es valido");
  return false;
}
else if (mensaje.length>100){
  alert("El  mensaje es muy largo");
return false;
}

}

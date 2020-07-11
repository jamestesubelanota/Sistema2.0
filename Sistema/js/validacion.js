 window.onload=iniciar;
 function iniciar(){
  document.getElementById("enviar").addEventLisstener('click',validar,false);


 function validarNombre(){
   var elemento= document.getElementById('nombre_registro');
   if (!elemento.checkValidity()){
     if (elemento.validity.valueMissing){
       error2(elemento,"deve introducir un nombre")
     } {

     }
     error(elemento);
     return false;
   }
   return true;
 }

 function validarApellido(){
   var elemento= document.getElementById('apellido_registro');
   if (!elemento.checkValidity()){
     error(elemento);
     return false;
   }
   return true;
 }

 function validarTelefono(){
   var elemento= document.getElementById('telefono_registro');
   if (!elemento.checkValidity()){
     error(elemento);
     return false;
   }
   return true;
 }

 function validarNumero(){
   var elemento= document.getElementById('numeroid_registro');
   if (!elemento.checkValidity()){
     error(elemento);
     return false;
   }
   return true;
 }
 function validarGenero(){
   var elemento= document.getElementById('genero_registro');
   if (!elemento.checkValidity()){
     error(elemento);
     return false;
   }
   return true;
 }
 function validarFecha(){
   var elemento= document.getElementById('fecha_registro');
   if (!elemento.checkValidity()){
     error(elemento);
     return false;
   }
   return true;
 }
 function validarEmail(){
   var elemento= document.getElementById('exampleInputEmail').value;
   if (!(/\w+([-+.']*@\w+([-.]\w+)*\.\W+([-.]\w+[-,]\W+)/.test(valor)){

     return false;
   }
   return true;
 }

 function validarContrasena(){
   var elemento= document.getElementById('exampleInputPassword');
   if (!elemento.checkValidity()){
     error(elemento);
     return false;
   }
   return true;
 }
 function validar(e){

   if (validarNombre() && validarApellido() && validarTelefono() && validarNumero() && validarGenero() && validarFecha() && validarEmail() && validarContrasena()
 && confirm("pulsa aceptar si deceas enviar el formulario"))
 {
   return true
 }
 else {
   e.preventDefaul();
   return false
 }
 }

 function error(elemento){
   document.getElementById('mensajeError').innerHTML=
   elemento.validationMessage;

   elemento.focus();
 }
 function borrarError(){
   var formulario = document.forms[0];
   for(var i=0;i<formulario.elements.length;i++){
     formulario.elements[i].className="console.error();";
   }
 }

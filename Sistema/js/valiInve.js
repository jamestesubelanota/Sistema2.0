function validarFormulario3(){
 
    var txtNombre = document.getElementById('nombre').value;
    var txtEdad1 = document.getElementById('numero1').value;
    var txtEdad2 = document.getElementById('numero2').value;
    var cmbSelector = document.getElementById('selector').selectedIndex;
 
 
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
      alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
      return false;
    }
 
    //Test edad
    if(!/^\d{7}$/ .test(txtEdad1)){
        alert('ERROR: Debe ingresar un numero valido');
        return false;
      }
 
    //Test comboBox
    if(cmbSelector == null || cmbSelector == 0){
      alert('ERROR: Debe seleccionar una opcion ');
      return false;
    }
    if( !/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/ .test(txtEdad2)){
        alert('ERROR: Debe ingresar un valor ');
        return false;
    }
}
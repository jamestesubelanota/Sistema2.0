function validarFormulario1(){
 
    var txtNombre = document.getElementById('nombre').value;
    var txtEdad = document.getElementById('numero').value;
    var txtEdad2 = document.getElementById('numero2').value;
    var cmbSelector = document.getElementById('selector').selectedIndex;
 
 
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
      alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
      return false;
    }
 
    //Test edad
    if( !/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/ .test(txtEdad)){
      alert('ERROR: Debe ingresar un valor');
      return false;
    }

      if(!/^\d{8}$/ .test(txtEdad2)){
        alert('ERROR: Debe ingresar un numero');
        return false;
      }
      
 
 
    //Test comboBox
    if(cmbSelector == null || cmbSelector == 0){
      alert('ERROR: Debe seleccionar una opcion ');
      return false;
    }
    return true;
  }
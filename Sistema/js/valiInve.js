function validarFormulario3(){

    var txtNombres = document.getElementById('nombres').value;
    var txtMarca = document.getElementById('marca').value;
    var txtAccesorios = document.getElementById('accesorios').value;
    var txtProveedor = document.getElementById('proveedor').value;
    var txtTelefono = document.getElementById('telefono').value;
    var txtCantidad = document.getElementById('cantidad').value;
    var cmbUbicacion = document.getElementById('ubicacion').selectedIndex;


    //Test campo obligatorio
    if(txtNombres == null || txtNombres.length == 0 || /^\s+$/.test(txtNombres)){
      alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
      return false;
    }

    //Test edad
    if( !/^\d{7}$/ .test(txtEdad)){
      alert('ERROR: Debe ingresar un numero');
      return false;
    }
    if(!/^\d{7}$/ .test(txtEdad1)){
        alert('ERROR: Debe ingresar un numero');
        return false;
      }


    //Test correo
    if(!(/\w+([-+.']\w+)*@\w+\.\S+/.test(txtCorreo))){
      alert('ERROR: Debe escribir un correo válido');
      return false;
    }

    //Test fecha
    if(!isNaN(txtFecha)){
      alert('ERROR: Debe elegir una fecha');
      return false;
    }

    //Test comboBox
    if(cmbSelector == null || cmbSelector == 0){
      alert('ERROR: Debe seleccionar una opcion ');
      return false;
    }
    if( !/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/ .test(txtEdad2)){
        alert('ERROR: Debe ingresar un valor');
        return false;
    }
}

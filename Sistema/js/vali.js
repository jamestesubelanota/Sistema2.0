function validarFormulario(){
 
    var txtNombre = document.getElementById('nombre').value;
    var txtEdad = document.getElementById('numero').value;
    var txtEdad1 = document.getElementById('numero1').value;
    var txtEdad2 = document.getElementById('numero2').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtFecha = document.getElementById('fecha').value;
    var cmbSelector = document.getElementById('selector').selectedIndex;
 
 
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
      alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
      return false;
    }
 
    //Test edad
    if( !/^\d{9}$/ .test(txtEdad)){
      alert('ERROR: Debe ingresar un numero valido');
      return false;
    }
    if(!/^\d{9}$/ .test(txtEdad1)){
        alert('ERROR: Debe ingresar un numero valido');
        return false;
      }
      if(!/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/ .test(txtEdad2)){
        alert('ERROR: Debe ingresar un cedula valida');
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
    $(document).on('click', '#btn-submit', function(e) { e.preventDefault(); swal({ title: 'Confirm', input: 'checkbox', inputValue: 0, inputPlaceholder: ' I agree with the Terms', confirmButtonText: 'Continue', inputValidator: function (result) { return new Promise(function (resolve, reject) { if (result) { resolve(); } else { reject('You need to agree with the Terms'); } }) } }).then(function (result) { $('#boton').submit(); }); }); 
    Swal.fire({
        title: '¿seguro que quieres guardar los cambios?',
        text: "No podras modificar sin los permisos necesarios",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, por favor'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Hecho',
            'Se han guardado los cambios',
            'success'
          )
          form.submit();
        } else {

            return false;

          
        }
      })
        
};
   

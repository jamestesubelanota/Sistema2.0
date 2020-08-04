
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Cargo Correctamente',
  showConfirmButton: false,
  timer: 1500
})

function showAlert(){
  Swal.fire({
      title: '¿seguro que quieres guardar los cambios?',
      text: "No podras modificar sin los permisos necesarios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, por favor'
    }).then((result) => {
      if (result.value > Submit) {
        Swal.fire(
          'Hecho',
          'Se han guardado los cambios',
          'success'
        )
      } else {

          //additional run on cancel  functions can be done hear

        
      }
    })
      
};
$("#btn1").click(function(){
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
        } else {

            //additional run on cancel  functions can be done hear

          
        }
      })
        
});
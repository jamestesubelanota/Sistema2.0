$(document).ready(function() {
    $('#TablaProductosSelecionados').DataTable({
        language: {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
			     },
			     "sProcessing":"Procesando...",
            },
        //para usar los botones
        responsive: "true",
        dom: 'Bfrtilp',
        buttons:[
			{
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i> ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
			{
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i> ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			{
				extend:    'print',
				text:      '<i class="fa fa-print"></i> ',
				titleAttr: 'Imprimir',
				className: 'btn btn-info'
			},
		]
    });
});

// IDEA: datatable de ver cotizacion
$(document).ready(function() {
    $('#tablaCotizaciones').DataTable({
        language: {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
          },
          "sProcessing":"Procesando...",
            },
        //para usar los botones
        responsive: "true",
        dom: 'Bfrtilp',
        buttons:[
     {
       extend:    'excelHtml5',
       text:      '<i class="fas fa-file-excel"></i> ',
       titleAttr: 'Exportar a Excel',
       className: 'btn btn-success'
     },
     {
       extend:    'pdfHtml5',
       text:      '<i class="fas fa-file-pdf"></i> ',
       titleAttr: 'Exportar a PDF',
       className: 'btn btn-danger'
     },
     {
       extend:    'print',
       text:      '<i class="fa fa-print"></i> ',
       titleAttr: 'Imprimir',
       className: 'btn btn-info'
     },
   ]
    });
});
// IDEA: tabla productos

$(document).ready(function() {
    $('#tablaProductos').DataTable({
        language: {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
          },
          "sProcessing":"Procesando...",
            },
        //para usar los botones
        responsive: "true",
        dom: 'Bfrtilp',
        buttons:[
     {
       extend:    'excelHtml5',
       text:      '<i class="fas fa-file-excel"></i> ',
       titleAttr: 'Exportar a Excel',
       className: 'btn btn-success'
     },
     {
       extend:    'pdfHtml5',
       text:      '<i class="fas fa-file-pdf"></i> ',
       titleAttr: 'Exportar a PDF',
       className: 'btn btn-danger'
     },
     {
       extend:    'print',
       text:      '<i class="fa fa-print"></i> ',
       titleAttr: 'Imprimir',
       className: 'btn btn-info'
     },
   ]
    });
});
// IDEA: tabla clientes
$(document).ready(function() {
    $('#tablaClientes').DataTable({
        language: {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
          },
          "sProcessing":"Procesando...",
            },
        //para usar los botones
        responsive: "true",
        dom: 'Bfrtilp',
        buttons:[
     {
       extend:    'excelHtml5',
       text:      '<i class="fas fa-file-excel"></i> ',
       titleAttr: 'Exportar a Excel',
       className: 'btn btn-success'
     },
     {
       extend:    'pdfHtml5',
       text:      '<i class="fas fa-file-pdf"></i> ',
       titleAttr: 'Exportar a PDF',
       className: 'btn btn-danger'
     },
     {
       extend:    'print',
       text:      '<i class="fa fa-print"></i> ',
       titleAttr: 'Imprimir',
       className: 'btn btn-info'
     },
   ]
    });
});
// IDEA: tabla inventario



// IDEA: tabla inventario

$(document).ready(function() {
    $('#tablaInventario').DataTable({
        language: {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
          },
          "sProcessing":"Procesando...",
            },
        //para usar los botones
        responsive: "true",
        dom: 'Bfrtilp',
        buttons:[
     {
       extend:    'excelHtml5',
       text:      '<i class="fas fa-file-excel"></i> ',
       titleAttr: 'Exportar a Excel',
       className: 'btn btn-success'
     },
     {
       extend:    'pdfHtml5',
       text:      '<i class="fas fa-file-pdf"></i> ',
       titleAttr: 'Exportar a PDF',
       className: 'btn btn-danger'
     },
     {
       extend:    'print',
       text:      '<i class="fa fa-print"></i> ',
       titleAttr: 'Imprimir',
       className: 'btn btn-info'
     },
   ]
    });
});
// IDEA: tabla inventario


// IDEA:
$(document).ready(function() {
    $('#tablaPersonal').DataTable({
        language: {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
          },
          "sProcessing":"Procesando...",
            },
        //para usar los botones
        responsive: "true",
        dom: 'Bfrtilp',
        buttons:[
     {
       extend:    'excelHtml5',
       text:      '<i class="fas fa-file-excel"></i> ',
       titleAttr: 'Exportar a Excel',
       className: 'btn btn-success'
     },
     {
       extend:    'pdfHtml5',
       text:      '<i class="fas fa-file-pdf"></i> ',
       titleAttr: 'Exportar a PDF',
       className: 'btn btn-danger'
     },
     {
       extend:    'print',
       text:      '<i class="fa fa-print"></i> ',
       titleAttr: 'Imprimir',
       className: 'btn btn-info'
     },
   ]
    });
});

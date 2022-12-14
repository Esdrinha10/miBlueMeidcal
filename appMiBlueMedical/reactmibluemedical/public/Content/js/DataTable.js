

$(document).ready(function () {
    $('#DataTable').DataTable(
    {
        "searching": true,
      
        "oLanguage": {
            "oPaginate": {
                "sNext": " Siguiente",
                "sPrevious": "Anterior ",
            },

            "sZeroRecords": "No se encontraron resultados",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sEmptyTable": "No hay registros",
            "sInfoEmpty": "Mostrando 0 de 0 Entradas",
            "sSearch": "Buscar",
            "sLengthMenu": "Mostrar _MENU_ registros por página",
            "sInfo": "Mostrando _START_ a _END_ Entradas",
            "responsive": true,
        }

    });
});


